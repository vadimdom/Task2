year = prompt("Enter a year: ");
if ( year % 400 == 0 ){
  alert("This year is a leap year: " + year);
}else{
    if(year % 4 == 0 && year % 100 !== 0){
        alert("This year is a leap year: " + year);
    }else{
        alert("This year is not a leap year: " + year);
    }
}