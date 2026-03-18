console.log("read")
const fs=require("fs")
// SYNCRONOUS
console.log("start");
var data=fs.readFileSync("a1.txt","utf-8");
console.log(data);
// console.log(data.toString())
console.log("end");

// ASYNCRONOUS
console.log("start");
var data=fs.readFileSync("a1.txt","utf-8",
(err,data)=>
{
    if(err)
        console.log("cannot read"+err);
    console.log(data);
console.log("read successfully");
})
console.log("end");