function isWeekend(str){
    var date = new Date(str);
    if (date.getDay() === 0 || date.getDay() === 6 ){
        return "Weekend";
    }else{
        return "Workday";
    }
}

console.log(isWeekend('Nov 15, 2014')); 
console.log(isWeekend('Nov 16, 2014')); 
console.log(isWeekend('Nov 17, 2014'));