var template = require('../views/allguestview');
//var pub_data = require('../model/public-data');
var pub_data = require('../model/personpan-data');
const CHandler = require('../lib/CookieHandler.js');

exports.get = function (req, res) {

  res.write(template.build('allguestview.js'));
  res.end();
};