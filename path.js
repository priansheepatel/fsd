// 
const path=require("path");
var pm="D:/abc/test/s.txt";
console.log(path.dirname(pm));
console.log(path.basename(pm));
console.log(path.extname(pm));
var p=path.parse(pm);
console.log(p);
console.log("main dir"+p.root);
console.log(__dirname)
console.log(__filename)