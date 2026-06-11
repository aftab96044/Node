const queryString = require('querystring');

function userDataSubmit(req, res){

    let dataBody = [];
    req.on('data', (chunk)=>{
        dataBody.push(chunk)
    })
    req.on('end', ()=>{
        let rawData = Buffer.concat(dataBody).toString()
        let readableData = queryString.parse(rawData);
        let dataString = "My name is " + readableData.name + " my email is " + readableData.email;
        console.log(dataString);
        res.end()
    })

    res.write(`
        <h1>You can get data from user</h1>
    `)
}
module.exports=userDataSubmit;


