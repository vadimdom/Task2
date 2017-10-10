function curday(str){
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var day = now.getDate();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    return (month + str + day + str + year);
}

console.log(curday("/"));
console.log(curday("-"));
