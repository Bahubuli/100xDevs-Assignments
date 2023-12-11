const fs = require("fs");

fs.writeFile("data.txt","great bullshit",(err)=>{
    if(err)
    throw new Error("can't write")
})
