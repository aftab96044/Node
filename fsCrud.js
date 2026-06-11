
const fs = require('fs')

console.log(process.argv);

const operation = process.argv[2]

if(operation=='write'){
    const name = process.argv[3]
    const content = process.argv[4]
    const fulName = "files/"+name+".txt"
    
    fs.writeFileSync(fulName, content);
}
else if(operation=='read'){
    const name = process.argv[3]
    //const content = process.argv[4]
    const fulName = "files/"+name+".txt"
    
    let data = fs.readFileSync(fulName,"utf-8");

    console.log(data);
}
else if(operation=='update'){
    const name = process.argv[3]
    const content = process.argv[4]
    const fulName = "files/"+name+".txt"
    
    let data = fs.appendFileSync(fulName,content);

    console.log(data);
}
else if(operation=='delete'){
    const name = process.argv[3]
    //const content = process.argv[4]
    const fulName = "files/"+name+".txt"
    
    fs.unlinkSync(fulName);
}
else{
    console.log("operation not found");
}



//fs.writeFileSync("files/apple.txt","this is a fruit")

//fs.unlinkSync("files/mango.txt")

// const data = fs.readFileSync('files/apple.txt',"utf-8")
// console.log(data);

//fs.appendFileSync("files/apple.txt","and this is good for health")


