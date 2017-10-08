function lastDay(year, month){
    var date = new Date(year, month+1, 0);
    return date.getDate();
}

console.log(lastDay(2014,0)); 
console.log(lastDay(2014,1)); 
console.log(lastDay(2014,11));