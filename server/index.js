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
const url = require("url");

const myServer = http.createServer((req, res) => {
  // req -> request, res-> response
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}:${req.url} New request Received \n`;

  const myUrl = url.parse(req.url, true);
  console.log(myUrl);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Homepage !");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`hello, ${username}`);
        break;
      case "/contact-us":
        res.end("Find me on twitter and github as Harshninave04");
        break;
      case "/search":
        const yourSearch = myUrl.query.search_query;
        res.end(`You have search for ${yourSearch}`);
        break;
      default:
        res.end("404 NOT FOUND");
    }
    // res.end("Hello World !!");
  });
  console.log("New Request Received!");
});

myServer.listen(5000, () => console.log(`Server running at http://localhost:5000/`));
