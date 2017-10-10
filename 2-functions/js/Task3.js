function check(str1){
    if (str1.indexOf(" ") > 0){
        var str = str1.split(" ").join("");
    }else{
        var str = str1.split(" ").join("");
    }
    var n = str.length;
    var mes = "";
    for (var i = 0; i <= n-1; i++){
        for (var j = 1; j <= n-i; j++){
            var dob = str.substr(i, j);
            mes = mes + dob + ", ";
        }
        if (n >= 3 && i >= 2){
            dob = str.substr(0, i-1) + str.substr(i);
            mes = mes + dob + ", ";
        }
    }
    return mes;
}

alert("Для строки dogm: " + check("dogm"));
alert("Для строки dog: " + check("dog"));
alert("Для строки vadim: " + check("vadim"));
