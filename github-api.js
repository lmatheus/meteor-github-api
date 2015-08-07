/*jshint expr:true*/

var Future = Npm.require("fibers/future");

/**
 * Creates an instance of the github class.
 *
 * @param {Object} An object containing the target version of the GitHub API
 * and, optionally, a timeout for calls to the GitHub API.
 */
GitHub = function(config) {
  var wrap,
      Module = Npm.require("github"),
      interface = new Module(config);

  /**
   * Wraps an asynchronous function in a future, making it synchronous.
   *
   * @param {Function} The function to be wrapped in a future.
   * @return A future-backed promise.
   */
  wrap = function(fn) {
    return function() {
      var future = new Future(),
          args = _.toArray(arguments),
          lastArg = _.last(args);

      // If a callback is provided, wrap it in a future without changing the
      // called function's API
      if (_.isFunction(lastArg)) {
        args[args.length - 1] = function(error, data) {
          if (error) {
            future.throw(error);
          } else {
            lastArg(error, data);
            future.return();
          }
        };
      } else {
        // If no callback is provided, set up a default one backed by a future
        args.push(function(error, data) {
          if (error) {
            future.throw(error);
          } else {
            future.return(data);
          }
        });
      }

      fn.apply(this, args);
      return future.wait();
    };
  };

  // Iterate over all modules and shim each method to be synchronous. Guard
  // against iterating over non-objects and against modifying non-functions.
  _.each(interface, function(obj) {
    if (_.isObject(obj)) {
      _.each(obj, function(fn, name, module) {
        if (_.isFunction(fn)) {
          module[name] = wrap(fn);
        }
      });
    }
  });

  return interface;
};
