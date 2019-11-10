const http = require('http');
const uuid = require('uuid');
const urlLib = require('url');
const fs = require('fs');

const books = [];

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end();
});

server.listen(3000),
  () => {
    console.log('Server is running');
  };
