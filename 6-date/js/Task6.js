function addMinutes(date, min){
   date.setMinutes(min);
   return date;
}

console.log(addMinutes(new Date(2014,10,2), 30).toString());