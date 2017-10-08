function getDaysInMonth(month, year){
    var now = new Date(year, month-1, 1);
    var days = 0;
    if (month === 12){
        var nextMonth = 0;
    }else{
        var nextMonth = now.getMonth()+1;
    }
    while (now.getMonth() !== nextMonth){
         days++;
         now = new Date(year, month-1, days);
    }
    return days-1;
}

console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012)); 
console.log(getDaysInMonth(9, 2012)); 
console.log(getDaysInMonth(12, 2012));