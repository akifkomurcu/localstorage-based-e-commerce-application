var template = require('../views/clearview');

const CHandler = require('../lib/CookieHandler.js');

exports.get = function (req, res) {

    res.write(template.build('clear.js'));
    res.end();
};