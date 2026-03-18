// given a json object in .txt file , read data find the psrimeter of circle and squre and append the result in the same file. also print in console.
const fs=require("fs")
a=fs.readFileSync("t9.txt","utf-8")
console.log(a)
a2=JSON.parse(a)
console.log(a2)
p_c=2*3.14*a2[0]["diameter"]
console.log(p_c)
p_s=2*a2[1]["side"]
console.log(p_s)
fs.appendFileSync("t9.txt","\ncircle perimeter "+p_c)
fs.appendFileSync("t9.txt","\nsqure parimeter"+p_s)