const qs = require('querystring');

var template = require('../views/adminview');
var login_data = require('../model/login-data');
const CHandler = require('../lib/CookieHandler.js');
var inputuser = '', inputpswd = '';

var userlist = login_data.userlist;
exports.get = function (request, response) {


    if (request.method === 'POST') {
        let body = '';

        request.on('data', data => {
            body += data;
        });
        request.on('end', () => {
            const postData = qs.parse(body);
            inputuser = postData.userName;
            inputpswd = postData.userPswd;
            var found = false;
            for (i = 0; i < userlist.count; i++)
                if (inputuser == userlist.userpass[i].user && inputpswd == userlist.userpass[i].passwd) found = true;

            if (found) {
                inputuser = '';
                inputpswd = '';
                CHandler.setCookie('userName', postData.userName);
                CHandler.setCookie('userPswd', postData.userPswd);
                CHandler.setCookieHead(response);

                //const content = template.loginview(postData.userName,postData.userPswd);

                //response.write(content);
                response.writeHead(303, { Location: '/personpan' });
                response.end();

            }
            else {
                console.log(request.method);
                response.writeHead(303, { Location: '/admin' });

                response.end();
            }
        });
    }
    else {

        const userNameFromCookie = CHandler.getCookie('userName', request);
        const userPswdFromCookie = CHandler.getCookie('userPswd', request);

        let err = 'input please';
        if (inputuser != '' && userNameFromCookie == inputuser)
            err = userNameFromCookie == inputuser && userPswdFromCookie == inputpswd ? 'OK' : 'user or password error';

        const content = template.adminview(err);

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write(content);
        response.end();
    }
};