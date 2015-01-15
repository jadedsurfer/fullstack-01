module.exports = function mountApp(server) {
  var sample = require('../apps/sample');
  var sampleApp = sample(server, {});
  server.use('/', sampleApp);
};
