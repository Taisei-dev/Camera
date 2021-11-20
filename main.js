var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
  var path=req.url;
  if(path==='/'){
    path='/index.html';
  }
  fs.readFile(__dirname + path, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(process.env.PORT);
