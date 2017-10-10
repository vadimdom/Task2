function multiply(){
    a = document.getElementById("first").value;
    b = document.getElementById("second").value;
    event.preventDefault();
    document.getElementById("result").innerHTML=a*b;
}

function divide(){
    a = document.getElementById("first").value;
    b = document.getElementById("second").value;
    event.preventDefault();
    document.getElementById("result").innerHTML= a/b;
}