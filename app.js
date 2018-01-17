// CREATING A NODE.JS SERVER

// get the http module from node.js
const http = require('http');
const fs = require('fs');

// createServer is a built-in method in node
http.createServer(function(req, res) {

  // first we create the headersin the response
  res.writeHead(200, { 'Content-Type': 'application/json' })
 // make a obj and send as JSON
  const obj = {
    firstname: 'Torgeir',
    lastname: 'Beyer'
  };  
  

  //this means the response is ending and its the last thing in the res
  res.end(JSON.stringify(obj));

//Listen on a port(number) and an adress(string). Port can be anything, the IP now is localhost
}).listen(1337, '127.0.0.1') 

