// read a file which has space seprated numbers sort them in assending order and write out put on console and a text file if broken consider sold
const fs=require("fs")
 var data=fs.readFileSync("nos.txt","utf-8")
 console.log(data)
 console.log(data[0])
//  for converting arraaaay us splite
 var a=data.split(" ");
 console.log(a)
 var ans=a.sort((a,b)=>a-b);
 console.log("sorted aray "+ans);
 fs.writeFileSync("snos.txt",ans.toString());