// To build http server we are going to use the http module -

// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   console.log("New Request Received !");
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
  // req -> request, res-> response
  const log = `${Date.now()}:${req.url} New request Received \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Homepage !");
        break;
      case "/about":
        res.end("hello, I am Harsh Ninave !");
        break;
      case "/contact-us":
        res.end("Find me on twitter and github as Harshninave04");
        break;
      default:
        res.end("404 NOT FOUND");
    }
    // res.end("Hello World !!");
  });
  console.log("New Request Received!");
});

myServer.listen(5000, () => console.log(`Server running at http://localhost:5000/`));
