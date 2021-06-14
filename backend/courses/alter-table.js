var http = require("http"),
  fs = require("fs"),
  url = require("url"),
  PORT = process.env.PORT || 7777;
// PORT = 8080,
mysql = require("mysql");

// Create the connection

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "8889",
  password: "root",
  database: "demodb",
});

// Connect to the database

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to the database");
  // After Table
  var sql =
    "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Our Table has been altered...");
  });
});

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
