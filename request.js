const http = require('http')

http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url == "/"){
        res.write("<h1>Home page</h1>")
    }else if(req.url == "/login"){
        res.write("<h1>Login page</h1>")

    }else{
        res.write("Other page")
    }
    res.end("THE END")
}).listen(5500)