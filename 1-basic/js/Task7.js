for (var i=2014; i<=2050; i++){
   var now = new Date(i, 0, 1);
   var days =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
   var day = now.getDay();
   if (day === 0){
      console.log("Year with 1 January on Sunday is: " + i );
   }
}