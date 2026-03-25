const url=require("url");
var u="http://video.google.com:80/abc/home.html?a='dhruvi'#test"
var pu=url.parse(u,true);
console.log(pu)
console.log("query is "+pu.query.a)
