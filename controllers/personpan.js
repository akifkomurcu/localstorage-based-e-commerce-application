const qs = require('querystring');
var template = require('../views/personpanview');
var per_data = require('../model/personpan-data');
const CHandler = require('../lib/CookieHandler.js');
exports.get = function (request, response) {


  if (request.method === 'POST') {
    let body = '';

    request.on('data', data => {
      body += data;
    });
    request.on('end', () => {
      const postData = qs.parse(body);
      inputtxtarea = postData.txtarea;
      const userNameFromCookie = CHandler.getCookie('userName', request);
      //const userPswdFromCookie = CHandler.getCookie('userPswd', request);
      let err = 'input please';
      var content;
      if (postData.txtarea != '' && userNameFromCookie != '') {
        per_data.pdata.setdata(userNameFromCookie, postData.txtarea);
        content = template.personpanview(err);
      }
      else {
        err = 'error !!'
        content = template.personpanview(err);
      }
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(content);
      response.end();
    });
  }
  else {

    userNameFromCookie = CHandler.getCookie('userName', request);
    err = 'input please';
    var content = '';
    if (userNameFromCookie != '') {
      err = '';
      content = template.personpanview(err);
    }
    else
      content = template.personpanview(err);
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(content);
    response.end();
  }
};