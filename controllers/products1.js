

var template = require('../views/productsview1');
//var pub_data = require('../model/public-data');
var pub_data = require('../model/personpan-data');
const CHandler = require('../lib/CookieHandler.js');

exports.get = function (req, res) {
    var publist = pub_data.pdata.getdata('admin');

    var list = '';
    for (i = 0; i < publist.length; i++) {
        list += "<li>" + publist[i] + "</li>";
    }
    list = "<ul>" + list + "</ul>";

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(template.build('admin', list));
    res.end();
};