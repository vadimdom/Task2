var now = new Date();
var year = now.getFullYear();
var month = now.getMonth()+1;
if (month < 10){
    month ="0" + month;
} 
var day = now.getDate();
if (day < 10){
    day ="0" + day;
} 
console.log(month + "/" + day + "/" + year);
console.log(month + "-" + day + "-" + year);