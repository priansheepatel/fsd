var arr=[10,20,30]
var obj={"name":"dpb",
    "rollno":50
};
// obj["name"]="dhruvi";
// console.log(obj["name"])
// var n="name";
// obj[n]="dhruvi";
// console.log(obj["name"])
for (x in arr)
    console.log(x+"->"+arr[x]);
for (x in obj)
    console.log(x+"->"+obj[x]);
for (x of arr)
    console.log(x);
// for (x of obj)
//     console.log(x)
const sub={"fsd":[{"topic":"html","cource":"beginer","content":["tags","table","form"]},{"topic":"html","cource":"ce"}]}
for(x in sub["fsd"])
{
    for (y in sub["fsd"][x])
    {console.log(y+"->"+sub["fsd"][x][y])}
}