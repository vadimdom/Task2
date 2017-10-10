function dateDiffIndays(str1, str2){
    var date1 = new Date(str1);
    var date2 = new Date(str2);
    return Math.abs((date1.getTime() - date2.getTime())/(1000*3600*24));
}

console.log(dateDiffIndays('04/02/2014', '11/04/2014')); 
console.log(dateDiffIndays('12/02/2014', '11/04/2014'));