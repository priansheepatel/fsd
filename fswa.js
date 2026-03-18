const fs=require("fs");
//syncronous
fs.writeFileSync("a2.txt","hello universe\ngood norningggggggggggggggg!");
fs.appendFileSync("a2.txt","\niam adding some thing");
// asyncronous
fs.writeFile("a3.txt","this is some data",(err)=>{
    if(err)
        console.log(err);
    console.log("write success!");
})
fs.appendFile("a3.txt","\nsome other data",(err)=>{
    if(err)
        console.log("can not write"+err);
    console.log("append success");
})
// ----------------------------
fs.appendFile("a4.txt","\nsome other data",(err)=>{
    if(err)
        console.log("can not write"+err);
    console.log("append success");
})
fs.readFile("a4.txt","utf-8",(err,data)=>{
    if(err)
        console.log("can not read"+err);
    console.log("read sucessfull")
})

