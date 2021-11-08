var cookies=[];
var cookie={
     
       getCookie:function (key, request) {
        const cookieData = request.headers.cookie !== undefined ? request.headers.cookie : '';
        const datas = cookieData.split(';').map(data => data.trim());
        const msgKeyValue = datas.find(data => data.startsWith(`${key}=`));
        if (msgKeyValue === undefined) return '';
        const msgValue = msgKeyValue.replace(`${key}=`, '');
        return unescape(msgValue);
      },
      
      
      setCookie:function (key, value) {
        const escapedValue = escape(value);
        var cookie=key+'='+escapedValue;
       cookies.push(cookie);

      //  response.setHeader('Set-Cookie', [`${key}=${escapedValue}`]);
      },
      setCookieHead:function (response) {
             
        response.setHeader('Set-Cookie', cookies );
      }


};

module.exports =cookie;