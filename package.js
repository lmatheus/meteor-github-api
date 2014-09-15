Package.describe({
  summary: 'NodeJS wrapper for the GitHub API',
  version: "0.1.11"
});

Npm.depends({github: '0.1.10'});

Package.on_use(function (api) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");
  api.export('GitHub');

  api.add_files('github-api.js', 'server');
});
