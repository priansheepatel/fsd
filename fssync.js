const fs=require("fs");
// create folder
fs.mkdirSync("mydata");
// write file
fs.writeFileSync("mydata/f1.txt","make fi txt file in ny data");
fs.appendFileSync("mydata/f1.txt","appending more data");
fs.renameSync("mydata/f1.txt","mydata/fnew.txt");
fs.copyFileSync("mydata/fnew.txt","mydata/f2.txt");
var d1=fs.readFileSync("mydata/fnew.txt","utf-8");
var d2=fs.readFileSync("mydata/f2.txt","utf-8");
console.log("File1 data"+d1);
console.log("File2 data"+d2);
fs.rmSync("mydata",{"recursive":true});