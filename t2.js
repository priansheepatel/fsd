const a={"a":"lju","b":["cse","it","ce"],"c":[{"d":"hii","e":["are",4,{"f":["semester","we"]}]}],"g":{"h":"student","i":["of","!"]},"j":[{"k":"python","l":"branch"},"fsd"]}
console.log(a["c"][0]["d"]+a["g"]["i"][1]+a["c"][0]["e"][2]["f"][1]+a["c"][0]["e"][0]+a["g"]["h"]+a["g"]["i"][0]+a["c"][0]["e"][2]["f"][0]+a["c"][0]["e"][1]+a["g"]["i"][0]+a["b"][2]+a["j"][0]["l"])

// console.log("your data is"+JSON.stringify(a));
// var b=JSON.stringify(a);
// var c=JSON.parse(b);
// console.log(c["c"][0]["e"][0])
var obj=JSON.parse(
    '{"fruit":"appl"}',
        function(a,b)
        {
            if(b=="apple")
                return "orange";
            else
                return b;
        });
        console.log(obj);