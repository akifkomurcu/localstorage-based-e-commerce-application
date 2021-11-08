var template = require('../views/logoutview');

const CHandler = require('../lib/CookieHandler.js');

exports.get = function (req, res) {

    res.write(template.build('logout.js'));
    res.end();
};