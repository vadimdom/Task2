function reverse(num){
    var n = String(num);
    alert("Origin " + n);
    alert("Reversed " + n.split("").reverse().join(""));
}

reverse(32243);