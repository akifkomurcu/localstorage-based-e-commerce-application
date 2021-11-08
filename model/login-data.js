var thelist = function () {
  var objJson = {
    "count": 4, "userpass": [{
      "user": "ali", "passwd": "123"
    }, {
      "user": "veli", "passwd": "123"
    }, {
      "user": "admin", "passwd": "admin"
    }, {
      "user": "oktar", "passwd": "999"
    }]
  };
  return objJson;
};
exports.userlist = thelist();