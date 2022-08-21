//const app = require('./app') //import from different file
//console.log(app.z)

const http = require('http');

//function datacontrol(req,resp){
  // resp.write("<h1> hello  avnish karn</h1>");
   //resp.end();
//}

//http.createServer(datacontrol).listen(4500);

//with arrow func  --is se code kam likhna pdta hai

http.createServer((req,resp) => {
   resp.write("hello bhai,avnish")
   resp.end();
}).listen(4500);