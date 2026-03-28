const fs=require("fs")
const url=require("url")
const http=require("http");
var u="https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest"
var pu=url.parse(u,true)
console.log(pu)
console.log(pu.pathname)

console.log(pu.query.c1)
console.log(pu.query.c2)
console.log(pu.query.c3)

console.log(pu.hash)
fs.writeFileSync("."+pu.pathname,pu.query.c1+"!\n"+pu.query.c3+"\n"+pu.query.c2+"\n"+pu.hash);
http.createServer((req,res)=>
    {
        if(req.url=="/")
        {
            res.writeHead(200,{"content-type":"text/html"});
            var d=fs.readFileSync("."+pu.pathname,"utf-8");
            res.end("<h1 style='color:red'>"+nd+"</h1>")
        }
        else{
            res.writeHead(404,{"content-type":"text/html"})
            res.end("page not found")
        }   

    });
    console.log("server")