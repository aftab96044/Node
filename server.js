const http = require('http')


//client ---req--> server
//client <--res--- server
http.createServer((req, res)=>{
    res.write("<h1>hello i am aftab</h1>")
    res.end("hello")
}).listen(4900);

http.createServer((req, res)=>{

    res.end("hi")
}).listen(4800)
 //yesss you can create two servers in same file but it should have different ports. 
