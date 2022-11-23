const req = require.context('./', true, /.svg$/);

module.exports = req.keys().map(req);
