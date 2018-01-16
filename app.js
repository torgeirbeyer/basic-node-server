// CREATING A NODE.JS SERVER

// get the http module from node.js
const http = require('http');

// createServer is a built-in method in node
http.createServer(function(req, res) {

  // first we create the headersin the response
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  //this means the response is ending and its the last thing in the res
  // \n means new line
  res.end('Hello world\n');

//Listen on a port(number) and an adress(string). Port can be anything, the IP now is localhost
}).listen(1337, '127.0.0.1') 

