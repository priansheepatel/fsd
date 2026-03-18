//given json array create function fl such that it trains an object with firs eliment as key and last eliment of array as a value
var r=["abc","def","ghi","jkl"]

function fl(r)
{
    key=r[0]
    value=r[r.length-1]
    v={}
    v[key]=value;
    return v
}
console.log(fl(r));
