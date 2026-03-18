var fac=[{name:"dpb",subject:"fsd",class:"a4"},{name:"abc",subject:"toc",class:"a2"}]
console.log("name "+fac[0].name+" subject "+fac[0].subject+" div "+fac[0].class);
console.log("name "+fac[1].name+" subject "+fac[1].subject+" div "+fac[1].class);
var ds=require("./t1.json");
console.log(ds.datastructures[1].name);
console.log(ds['datastructures'][1]["name"]);
console.log(ds['datastructures'][0]["name"]);
console.log(ds["xyz"]["name"]);
console.log(ds["xyz"]["topic"]);
console.log(ds["xyz"]);
