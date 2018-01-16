// CREATING A NODE.JS SERVER

// get the http module from node.js
const http = require('http');
const fs = require('fs');

// createServer is a built-in method in node
http.createServer(function(req, res) {

  // first we create the headersin the response
  res.writeHead(200, { 'Content-Type': 'text/html' })
  //send the response aas a stream with a pipe
  let html = fs.createReadStream(__dirname + '/index.html').pipe(res);
  
  
  // const message = 'Helloooo WORLD!';
  // html = html.replace('{Message}', message);
  //this means the response is ending and its the last thing in the res
  // res.end(html);

//Listen on a port(number) and an adress(string). Port can be anything, the IP now is localhost
}).listen(1337, '127.0.0.1') 

