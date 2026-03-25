// create an event peri find peri of circle and squre also check if eadious is negative or not using event negredi if negative display please enter positive radious create same event to check if side is negative or not.event negside,
const EventEmmiter=require("events");
const ee=new EventEmmiter();
 r=12;
 s=-5;
function f1()
{
    if(r<0)
    {
        ee.emit("negr")
    }
    else
    {
        p=2*3.14*r
        console.log( p)
    }
}
function f2()
{
    if(s<0)
    {
        ee.emit("negs")
    }
    else
    {
        p=s*s
         console.log(p)
    
    }
}
ee.on("negr",()=>{console.log("Radius must be positive")})
ee.on("negs",()=>{console.log("Side must be positive")})

ee.on("peri",f1)

ee.on("peri",f2)
ee.emit("peri")