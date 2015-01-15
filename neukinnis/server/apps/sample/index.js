module.exports = function explorer(loopbackApplication, options) {

  var app = loopbackApplication.loopback.Router();

  app.get('/sample', function(req, res) {
      res.send('This is a sample');
    }
  );

  return app;
};

