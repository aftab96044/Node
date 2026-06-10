const http = require('http')
const fs = require('fs')


http.createServer((req, res)=>{

    fs.readFile('html/form.html','utf-8',(error, data)=>{
        
        if(error){
            res.writeHead(500,{"content-type":'text/plain'})
            res.end('Internal server error')
            return
        }
        if(req.url == '/'){
            res.writeHead(200,{"content-type":'text/html'})
            res.write(data)
        }else if(req.url == '/submit'){
            res.write('<h1> data submitted</h1>')
        }
        res.end()
    })
    
}).listen(2200)
// http.createServer((req, res)=>{
//     res.writeHead(200,{"content-type":'text/html'})
//     console.log(req.url);


//     if(req.url == '/'){



//         res.write(`
//             <form action = "/submit" method="post">
//             <input type="text" placeholder="enter name" name="name"/>
//             <input type="text" placeholder="enter email" name="email"/>
//             <button>Submit</button>
//             </form>
//         `)
//     }else if(req.url == '/submit'){
//         res.write('<h1> data submitted</h1>')
//     }

//     res.end()
// }).listen(2000)