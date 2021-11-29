
var arr_obj = [{ "pername": "admin", "perdata": "admin" }]; //manuel data
var persondata = {

  setdata: function (key, val) {

    var obj = {};
    obj["pername"] = key;
    obj["perdata"] = val;
    arr_obj.push(obj);

  },
  getdata: function (key) {
    r_a_o = [];
    arr_obj.forEach(a_o => {

      if (a_o.pername == key) {
        r_a_o.push(a_o.perdata);
      }

    });

    return r_a_o;

  }

};
exports.pdata = persondata;