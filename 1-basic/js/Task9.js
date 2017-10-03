var now = new Date();
var year = now.getFullYear();
var day = now.getDate();
var month = now.getMonth();
if (month == 11 && day >=25){
    var christ = new Date(year+1, 11, 25);
}else{
    var christ = new Date(year, 11, 25);
}
console.log("Days left until next Christmas: " + Math.round((christ.getTime() - now.getTime())/(1000*3600*24)));