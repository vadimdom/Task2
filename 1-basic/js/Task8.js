var rand = Math.round(Math.random()*10);
var choice = +(prompt("Make your choice:"));
if (choice === rand){
    alert("Good Work");
}else{
    alert("Not matched! Right answer is: " + rand);
}