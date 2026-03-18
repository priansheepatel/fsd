const EventEmitter=require("events");
const ee=new EventEmitter();
function hello()
{
    console.log("helloo");

}
function hello1()
{
    console.log("hii universe");
}
ee.on("bye",(n)=>{
    console.log("good bye "+n);
})
ee.on("he",hello);
ee.on("he",hello1);
ee.removeListener("he",hello);
ee.emit("he");

ee.emit("bye","dhruvi");
ee.emit("bye","world");
ee.emit("bye","usa");
ee.removeAllListeners("bye");
console.log("after bye remove")
ee.emit("bye")


