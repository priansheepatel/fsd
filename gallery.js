const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=="/gallery")
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.end("<img src='/ss.png' all='image'>" );
    }
    
        else if(req.url=="/abc.css")
        {
            res.writeHead(200,{"content-type":"text/css"});

            var d=FileSystem.readFileSync("abc.css")
            res.end(d);
        }
        else
        {
            res.writeHead(404,{"content-type":"text/plain"});
            res.end("page not found");
        }
    
});
server.listen(3002);