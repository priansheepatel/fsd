// creat a folder abc if it does not exis.create file xyz.txt with some data append data and print in console data appended.read contain of file and print in console.delete file and folder and print all operation successfull.use async but use events module to excute tham in sync in order.
const fs=require("fs");
const EventEmmiter=require("events");
const ee=new EventEmmiter();
function cf()
{
    if(!fs.exists("abc.txt",(err)=>{}))
    {
        fs.mkdir("abc.txt",(err)=>{if(!err)
            ee.emit("fo1");
            console.log("create")
        })
    }
}
function wf()
{
    fs.writeFile("abc.txt/abc","hello\nhii\nbye",(err)=>{
        if(!err)
            ee.emit("fo2");
        console.log("write")
        })
}
function af()
{
    fs.appendFile("abc.txt/abc","tataaaaaaaaaaaaaaaaaaaa",(err)=>{if(!err)
           ee.emit("fo3");
            console.log("append")
        })
}
function rf()
{
    fs.readFile("abc.txt/abc","utf-8",(err,data)=>{
        if(err)
            console.log(err)          
        console.log(data)
        })
}
ee.on("fo",cf)
ee.on("fo1",wf)
ee.on("fo2",af)
ee.on("fo3",rf)
ee.emit("fo")