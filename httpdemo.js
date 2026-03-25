const http=require("http");
//1.create server
var server=http.createServer((req,res)=>{
    console.log(req.url)
    //2.write header
    res.writeHead(200,{"content-type":"text/html"});
    // 3 write response
    res.write("<h1 style=color:green> hellooooooooooo</h1>");
    // 4.write end response
    res.end("last line");
});
// 5.start server
server.listen(3000,()=>{
    console.log("server start at port 3000")
});