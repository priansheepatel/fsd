const http=require("http");
// 1.createserver
var server=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>welcome to home</h1>")
        res.end();

    }
    else if(req.url=="/above")
    {
         res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>above us</h1>")
        res.end();
    }
    else
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<h1>page is not found</h1>")
        res.end();
    }
})
server.listen(3001,()=>{
    console.log("server started visit http://localhost:3001");
})