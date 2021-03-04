var http = require("http"),
  fs = require("fs"),
  url = require("url"),
  PORT = process.env.PORT || 7777;

http
  .createServer(function (req, res) {
    var q = url.parse(req.url, true); // Show Difference Pages
    var fileName = "." + q.pathname;
    if (fileName === "./") {
      fileName = "./index";
    }
    fileName = fileName + ".html";
    fs.readFile(fileName, function (err, data) {
      // File System and Index Page
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 Not Found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(PORT);
