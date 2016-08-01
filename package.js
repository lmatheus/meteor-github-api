Package.describe({
  git: "https://github.com/lmatheus/meteor-github-api.git",
  name: "lmatheus:github-api",
  summary: 'NodeJS wrapper for the GitHub API',
  version: "2.4.0"
});

Npm.depends({github: '2.4.0'});

Package.on_use(function (api) {
  api.versionsFrom("1.4.0.1");
  api.use(['underscore'], ['client', 'server']);
  api.export('GitHub');

  api.add_files('github-api.js', 'server');
});
