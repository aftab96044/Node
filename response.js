const http = require('http')
const age = 21
const server = http.createServer((req, res)=>{
    res.setHeader("Content-Type","Text/html")
    res.write("<h2>i am new here</h2>")
    //it doesnt recognize the html tags so it also prints <h2> , to avoid that we use Header.
    res.write(`
        <html>
        <head>
        <title>code step by step</title>
        </head>
        <body>
            <h1>dhoom machale</h1>
            <h2>age is`+age+`</h2>
        </body>
        </html>
        `)
    //but using backticks will help us avoid Header
    res.end('dhoom dhoom')
});
server.listen(5000)

