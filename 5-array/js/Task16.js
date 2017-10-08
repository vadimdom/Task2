var year1 = +(prompt("Enter a first year: "));
var year2 = +(prompt("Enter a second year: "));
var diap = [];
var nom = 0;
while (year1 !== year2){
    diap[nom]=year1;
    year1++;
    nom++;
}
for (var i = 0; i < diap.length; i++){
if ( diap[i] % 400 == 0 ){
  alert("This year is a leap year: " + diap[i]);
}else{
    if(diap[i] % 4 == 0 && diap[i] % 100 !== 0){
        alert("This year is a leap year: " + diap[i]);
    }
}
}