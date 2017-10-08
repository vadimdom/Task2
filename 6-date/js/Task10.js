function yesterday(str){
    var date = new Date(str);
    var year = date.getFullYear();
    var month = date.getMonth();
    var yest = date.getDate()-1;
    return new Date(year, month, yest);
}

console.log(yesterday('Nov 15, 2014')); 
console.log(yesterday('Nov 16, 2015')); 
console.log(yesterday('Nov 17, 2016'));