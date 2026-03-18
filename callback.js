//asyncronus
function hello()
{
    setTimeout(()=>{console.log("hello");},2000)
}
function bye()
{
    console.log("bye")
}
hello();
bye();
//call back function
function hello(cb)
{
    setTimeout(()=>{console.log("hello");cb();},2000)
}
function bye()
{
    console.log("bye")
}
hello();
bye();