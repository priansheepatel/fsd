const fs=require("fs");
// syncronous
fs.unlinkSync("a3.txt");
// asyncronous
fs.unlink("a2.txt",(err)=>{
    if(err)
        console.log("can not delete file"+err)
    console.log("file deleted")
})