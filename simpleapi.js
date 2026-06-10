const http = require('http')

const userData=[
    {
        name: 'aftab',
        age: 21,
        address: 'solapur'
    },
    {
        name: 'aman',
        age: 28,
        address: 'pune'
    },
    {
        name: 'affan',
        age: 25,
        address: 'akkal'
    }

]
http.createServer((req, res)=>{
    res.setHeader("Content-Type","application/json")
    res.write(JSON.stringify(userData));
    res.end();
}).listen(6100)