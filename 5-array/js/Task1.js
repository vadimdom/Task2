function isArray(dat){
    var type = typeof dat;
    if (type === "object" ){
        alert(dat + " is array ");
    }else{
        alert(dat + " is not an array ");
    }
}


isArray([1, 2, 5, [6, 0]]);
isArray([]);
isArray(123);
isArray("hello");