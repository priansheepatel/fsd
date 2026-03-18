
 var person=[{name:"jack",height:188},
    {name:"tom",height:344},
    {name:"nancy",height:248},
    {name:"glory",height:165}
 ]
 
 var s=person.sort((a,b)=>b.height-a.height);
 console.log(s)
 console.log(s[0])
 console.log("person having max hight name "+s[0]["name"]+" height "+s[0]["height"])

 
