var url = require('url');
var fs = require('fs');
var upload_file = require("../froala/file_upload.js");
var upload_image = require("../froala/image_upload.js");
var upload_video = require("../froala/video_upload.js");
exports.file=function (req, res) {
    upload_file(req, function(err, data) {
  
      if (err) {
         return res.status(404).end(JSON.stringify(err));
      }
  
      res.writeHeader(200 , {"Content-Type" : "application/json; charset=utf-8"});
      res.write(JSON.stringify(data));
      res.end();
    });
  }
  exports.image=function (req, res) {
    upload_image(req, function(err, data) {
  
      if (err) {
        return res.status(404).end(JSON.stringify(err));
      }
      res.writeHeader(200 , {"Content-Type" : "application/json; charset=utf-8"});
      res.write(JSON.stringify(data));
      res.end();
    });
  }
  exports.video=function (req, res) {
      upload_video(req, function(err, data) {
    
        if (err) {
          return res.status(404).end(JSON.stringify(err));
        }
    
        res.writeHeader(200 , {"Content-Type" : "application/json; charset=utf-8"});
      res.write(JSON.stringify(data));
      res.end();
      });
    }
    
