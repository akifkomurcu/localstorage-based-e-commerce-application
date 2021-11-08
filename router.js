var url = require('url');
var fs = require('fs');

exports.get = function (req, res) {
  req.requrl = url.parse(req.url, true);
  var path = req.requrl.pathname;


  if (path === '/' || path === '/allguest') {
    require('./controllers/allguest').get(req, res);
  }
  else
    if (path === '/login') {
      require('./controllers/login').get(req, res);
    }
    else
      if (path === '/logout') {
        require('./controllers/logout').get(req, res);
      }
      else
        if (path === '/clear') {
          require('./controllers/clear').get(req, res);
        }
        else
          if (path === '/single') {
            require('./controllers/single').get(req, res);
          }
          else
            if (path === '/allguest') {
              require('./controllers/allguest').get(req, res);
            }
            else
              if (path === '/admin') {
                require('./controllers/admin').get(req, res);
              }
              else
                if (path === '/register') {
                  require('./controllers/register').get(req, res);
                }
                else
                  if (path === '/products') {
                    require('./controllers/products').get(req, res);
                  }
                  else
                    if (path === '/products1') {
                      require('./controllers/products1').get(req, res);
                    }
                    else
                      if (path === '/checkout') {
                        require('./controllers/checkout').get(req, res);
                      }
                      else
                        if (path === '/personpan') {
                          require('./controllers/personpan').get(req, res);
                        }
                        else
                          if (path === '/file_upload' && req.method === 'POST') {
                            require('./controllers/froalacont').file(req, res);
                          }
                          else
                            if (path === '/image_upload' && req.method === 'POST') {
                              require('./controllers/froalacont').image(req, res);
                            }
                            else
                              if (path === '/redirect') {
                                require('./controllers/redirect').get(req, res);
                              }
                              else
                                if (path === '/video_upload' && req.method === 'POST') {
                                  require('./controllers/froalacont').video(req, res);
                                }

                                else {
                                  require('./controllers/404').get(req, res);
                                }
}