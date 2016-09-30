# meteor-github

This is a version of [Mike de Boer](https://github.com/mikedeboer)'s excellent
[node-github](https://github.com/mikedeboer/node-github) npm module, repackaged
for Meteor.

## Example Usage
You can use it in exactly the same way you would use the original package
(example adapted from its GitHub page):

```javascript
var github = new GitHub({
    version: "3.0.0", // required
    timeout: 5000     // optional
});

github.user.getFollowingFromUser({
    user: "ndhoule"
}, function(err, res) {
    console.log(JSON.stringify(res));
});
```

Because Meteor follows a synchronous programming model, this package allows you
to skip out on the callback if you prefer:

```javascript
var result = github.user.getFollowingFromUser({
    user: "ndhoule"
});

console.log(JSON.stringify(result));
```

## How to Get It

You can install this package running `meteor add lmatheus:github-api`.
