const {readFile,writeFile} = require("fs");

readFile("data.txt","utf-8",(err,data)=>{

    let cleaned = "";
    for(let i=0;i<data.length;i++)
    {
        if(i>0 && data[i]==' ' && data[i-1]==' ')
        continue;

        cleaned+=data[i];
    }

    writeFile("data.txt",cleaned,(err)=>{
        if(err)
        {
            console.log(err)
        }
    })
})
