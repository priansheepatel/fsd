// given path extrect directory name create the extrected folder at current location.extrect the file name from given name create tht file in create that file in the created folder and write some data inside copy this file to other file and delete the original.
const path=require("path")
const fs=require("fs")
var pm="lju/f1.txt";
var p=path.parse(pm);
var fn=path.basename(pm);
var dir=p.dir
b=fs.mkdirSync(dir);
fs.writeFileSync(path.join(dir,fn),"some data");
fs.copyFileSync(path.join(dir,fn),path.join(dir,"f2.txt"));
fs.unlinkSync(path.join(dir,fn))
console.log("deleted")