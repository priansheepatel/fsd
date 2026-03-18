// syncronus code
console.log("start");
for(let i=0;i<10;i++)
{
    console.log("waitinggggg");
}
console.log("end");
console.log("------------------------------------")
// asyncronus code

console.log("start");
function f()
{
    for(let i=0;i<10;i++)
{
    console.log("waitinggggg");
}

}
setTimeout(f,3000);
console.log("end");
console.log("-------------------------------------")
