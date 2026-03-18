// write text u are creatin file append text u are appending data copy file to help 1.txt read the file print data on console at the and print thanks using my program write append copy read sqence must be main tain but all calls are async
const fs=require("fs")
fs.writeFile("help.txt","i am creating file",(err)=>{
    if(err)
        console.log(err);
    console.log("file writen")
    fs.appendFile("help.txt","appending data",(err)=>{
        if(err)
            console.log(err);
        console.log("append successfully")
        fs.copyFile("help.txt","help1.txt",(err)=>{
        if(err)
            console.log(err);
        console.log("copy successfully")
    fs.readFile("help.txt","utf-8",(err,data)=>{
        if(err)
            console.log(err)
        console.log(data)
        console.log("thank you")
    })})
    })
})