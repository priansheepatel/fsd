// given marks of five subjects, create event calculate that finds sum of this marks create event percentage that finds percentage from total marks 125.create an event marksheet that display marks of each subject, total percentage.
const fs=require("fs");
const EventEmitter=require("event");
const ee=new EventEmitter();
marks=toString([20,18,19,23,21]);
ee.on("calculate",(m)=>{var total=0;
    for(i=0;i<i.length;i++)
        total=total=total+m[i];
    ee.emit("pecentage",total);
});
ee.on("percentage",(t)=>{
    var p=t/125*100;
    console.log("total"+t);
    console.log("percentage"+p);
    ee.emit("marksheet",t,p);
});
ee.on("marksheet",(t,p)=>{
    fs.writeFileSync("ms.txt","marks of all subjects:"+marks+"\npercentage"+p+"\ntotal"+t);
    ee.emit("calculate",marks)
})
