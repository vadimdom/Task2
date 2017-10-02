var now = new Date();
var day = now.getDay();
var days =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log("Today is: " + days[day] );
var hours = now.getHours();
var AP;
var minutes = now.getMinutes();
var seconds = now.getSeconds();
if (hours >= 12){
    AP = "PM";
    hours -=12;
} else{
    AP = "AM";
}
console.log("Current time is: " + hours +" " + AP + " : " + minutes + " : " + seconds);