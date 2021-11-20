var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
  if(req.url==='/'){
    fs.readFile(__dirname + '/index.html',(err,data)=>{
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    })
  }
  else{
    fs.readFile(__dirname + req.url, function (err,data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    });
  }
}).listen(process.env.PORT);
