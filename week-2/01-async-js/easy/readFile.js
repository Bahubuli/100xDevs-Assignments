const {readFile,writeFile} = require("fs");

readFile("data.txt",'utf-8',(err,data)=>{
    console.log(data)
})
