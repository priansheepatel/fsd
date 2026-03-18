
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