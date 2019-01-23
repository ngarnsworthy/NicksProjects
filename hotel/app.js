const https = require('https');
const fs = require('fs');
const path = require('path');

const options = {
  key: fs.readFileSync('private.pem'),
  cert: fs.readFileSync('selfSigned.pem')
};

var g_coupons = [];

https.createServer(options, function(req, res) {

  console.log('request received');

  var filePath = '.' + req.url;
  if (filePath == './')
    filePath = './home.html';

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

  if (req.method == "POST") {
    var body = "";

    req.on("data", function(data) {
      body += data;
    });
    req.on('end', function() {
      body = JSON.parse(body)
      res.writeHead(200);
      console.log(body);
      g_coupons=body
      fs.writeFile("db.txt" , g_coupons, function(err) {
          if(err)
              return console.log(err);})
      res.end();
  })


    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end('post received');
  } else {

    switch (filePath) {

      case './getCoupons':
        res.writeHead(200);
        res.end(JSON.stringify(g_coupons));
        res.end();
        fs.readFile("db.txt", function(error, content) {
          if (error) {
          throw(err)
        }})
        }



      // default:

        fs.readFile(filePath, function(error, content) {
          if (error) {
            if (error.code == 'ENOENT') {
              fs.readFile('./404.html', function(error, content) {
                res.writeHead(200, {
                  'Content-Type': contentType
                });
                res.end(content, 'utf-8');
              });
            } else {
              res.writeHead(500);
              res.end('Sorry, check with the site admin for error: ' + error.code + ' ..\n');
              res.end();
            }
          } else {
            res.writeHead(200, {
              'Content-Type': contentType
            });
            res.end(content, 'utf-8');
          }
        ;
    })
  }
}).listen(8000);
