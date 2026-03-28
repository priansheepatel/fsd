// Write a NodeJS program to create a file named test.txt containing the 
// initial text "Exam attempt ". Then, it should add three more lines to 
// the file: "Entry 1: Pass", "Entry 2: Fail", and "Entry 3: Pass".
// After writing, the program must read the file and count how many 
// times the word "Pass" appears and if the word "Pass" appears three or 
// more times, the program should erase the content inside test.txt.
const fs=require("fs")
fs.writeFileSync("test.txt","exam attempt\n")
fs.appendFileSync("test.txt","\nEntry 1: Pass")
fs.appendFileSync("test.txt","\nEntry 2: fail")
fs.appendFileSync("test.txt","\nEntry 3: Pass")
 var r=fs.readFileSync("test.txt","utf-8")
console.log(r)
var m=r.match(/pass/gi);
if (m!=null)
{
    count=m.length;
    if(count>=3)
    {
        fs.writeFileSync("test.txt","")
    }
    else{
        console.log("content retained"+count);
    }
}
