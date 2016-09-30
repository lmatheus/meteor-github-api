Package.describe({
  git: "https://github.com/lmatheus/meteor-github-api.git",
  name: "lmatheus:github-api",
  summary: 'NodeJS wrapper for the GitHub API',
  version: "4.0.1"
});

Npm.depends({github: '3.1.1'});

Package.on_use(function (api) {
  api.versionsFrom("1.4.0.1");
  api.use(['underscore'], ['client', 'server']);
  api.export('GitHub');

  api.add_files('github-api.js', 'server');
});
