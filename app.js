my name is shubham patil
const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from AWS 🚀");
  res.end();
}).listen(3000);

console.log("Server running on port 3000");
