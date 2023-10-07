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
const url = require("url"); // Installed the package url from the npm.org , [npm install url]

const express = require("express");

const app = express(); // Here app is nothing but the myHandler function in the express
app.get("/", (req, res) => {
  return res.send("You're directed to Homepage !!")
})
app.get("/about", (req, res) => {
  return res.send("You're directed to about page !!")
})
app.get("/contact", (req, res) => {
  return res.send("Hello my name is Harsh Ninave !! contact me on my email:harshninave58@gmail.com")
})
app.get("/form", (req, res) => {
  return res.send("Hello "+ req.query.name + ", Fill the formality form to let us know why you reach out to us !")
})
// Here we don't have to write url module separatley to access query name
// Simply use req.query.<query-name>

// What Express says if i am making everything easy for you then you don't have do such thing also i.e. [const myServer = http.createServer(myHandler); & myServer.listen(5000, () => console.log(`Server running at http://localhost:5000/`));]

app.listen(8000, ()=> console.log(`Server is running on http://localhost:8000/`))



// const myServer = http.createServer(app)



/*
function myHandler(req, res) {
  // req -> request, res-> response
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}: ${req.method} ${req.url} New request Received \n`;

  const myUrl = url.parse(req.url, true);
  // console.log(myUrl);

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
      case "/signup":
        if (req.method === "GET") res.end("This is a signup form !");
        else {
          // DB query
          res.method("successs");
        }
      default:
        res.end("404 NOT FOUND");
    }
    // res.end("Hello World !!");
  });
  console.log("New Request Received!");
}
*/

// const myServer = http.createServer(myHandler);
// Above module [createServer] is used for creating a server manually only by using plane nodejs

// myServer.listen(5000, () => console.log(`Server running at http://localhost:5000/`));
