Package.describe({
  git: "https://github.com/bruz/meteor-github-api.git",
  name: "bruz:github-api",
  summary: 'NodeJS wrapper for the GitHub API',
  version: "0.2.2_1"
});

Npm.depends({github: '0.2.2'});

Package.on_use(function (api) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");
  api.use(['underscore'], ['client', 'server']);
  api.export('GitHub');

  api.add_files('github-api.js', 'server');
});
