// given an object in json file print this object on console and t8.txt file
 const fs=require("fs")
// var ds=require("./fs.json");
// console.log(ds);
d=fs.readFileSync("fj.json","utf-8");
console.log(d)
fs.writeFileSync("ft.txt",d)
