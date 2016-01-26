exports.sender = function foo (COMMENTS,PHONE_MOBILE,EMAIL_WORK,NAME,SECOND_NAME,LAST_NAME,PRODUCT_ID) {
var get = require('get-parameter-names')
var paramNames = get(foo)

var https = require('https');
var querystring = require('querystring');
//
 

var info = {
    LOGIN: 'sha.egor@gmail.com',
    PASSWORD: 'test',
    TITLE: 'Новая заявка',
    SOURCE_ID: 'WEB',
}

for (i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'undefined') {
	
         info[paramNames[i]]=arguments[i]
        }
    }


var postData = querystring.stringify(info);

 
// request option
var options = {
  host: 'electrickmv.bitrix24.ru',
  port: 443,
  method: 'POST',
  path: '/crm/configs/import/lead.php',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};
 
// request object
var req = https.request(options, function (res) {
  var result = '';
  res.on('data', function (chunk) {
    result += chunk;
  });
  res.on('end', function () {
    console.log(result);
  });
  res.on('error', function (err) {
    console.log(err);
  })
});
 
// req error
req.on('error', function (err) {
  console.log(err);
});
 
//send request witht the postData form
req.write(postData);
req.end();

}
