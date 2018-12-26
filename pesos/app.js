var https = require('https');
var fs = require('fs');
var jsonfile = require('jsonfile');
var path = require('path');


var options = {
  key: fs.readFileSync('sscp.pem'),
  cert: fs.readFileSync('ssc.pem')
};

https.createServer( options, function(req, res) {
  jsonfile.readFile("data.json", function(err, obj) {
    logon = obj || [];
  });

  console.log('request received');

  var filePath = '.' + req.url;
  if (filePath == './')
    filePath = './index.html';

  var extname = path.extname(filePath);
  var contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
    case '.wav':
      contentType = 'audio/wav';
      break;
  }



  console.log(filePath);
  console.log(req.method);

}).listen(8125);
