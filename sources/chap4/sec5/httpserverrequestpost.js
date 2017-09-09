//httpserverrequestpost.js

var http = require('http');
var querystring = require('querystring');
var util = require('util');

http.createServer(function(req, res) {
  var post = '';

/**
 * 不要在真正的生产应用中使用上面这种简单的方法来获取 POST 请
 *求，因为它有严重的效率问题和安全问题，这只是一个帮助你理解的示例。
 */
  req.on('data', function(chunk) {
    post += chunk;
  });

  req.on('end', function() {
    post = querystring.parse(post);
    res.end(util.inspect(post));
  });

}).listen(3000);
