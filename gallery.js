const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=="/")
    {
        res.write("<img src='/abc' alt='flower'" );
        res.end();
    }
    {
        if(req.url=="/abc")
        {
            res.writeHead(200,{"content-type":"image/png"});

            var d=FileSystem.readFileSync("ss.png")
            res.end(d);
        }
        else
        {
            res.writeHead(404,{"content-type":"text/plain"});
            res.end("page not found");
        }
    }
});
server.listen(3002);