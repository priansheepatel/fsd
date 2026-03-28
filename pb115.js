//  Write node.js script to print “Welcome to Home Page” with two links 
// containing two pages named as “About Us” and “Contact Us” on 
// home page of server. If user request for About Us page it should 
// display “Welcome to LJ University” in bold font-style with blue 
// color and if user request for Contact Us page it should display 
// “Email:abc@ljinstitutes.edu.in” in italic font-style with red color if 
// any other request is requested it shows “Page not found” message in 
// plaintext.
const http=require("http")
const fs=require("fs")
const url=require("url")
http.createServer((req,res)=>
    {
        if(req.url=="/")
        {
            res.writeHead(200,{"content-type":"text/html"});
            res.write("welcome home")
            res.write("<a href='/about'>about us</a>")
            res.write("<a href='/contain'>contact us</a>")
            res.end();

        }
        else if(req.url=="/about")
        {
            res.writeHead("about")
            res.end("<b style='color:blue'>about</b>")
        }
        else if(req.url=="/contain")
        {
             res.writeHead("contain")
            res.end("<b style='color:red'>contain</b>")
        }
        else{
            res.writeHead(404,".....")
            res.end("no page")
        }
    }).listen(3004,console.log("server started"))
