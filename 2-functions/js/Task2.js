function check(str){
    alert("Origin: " + str);
    if (str.indexOf(" ") > 0){
        var str2 = str.split(" ").join("");
        var str1 = str2.split("").reverse().join("");
        alert("Reversed: " + str1);
    }else{
        var str1 = str.split("").reverse().join("");
        alert("Reversed: " + str1);
    }
    if (str === str1 || str1 === str2){
        alert(str + " is a palindrome");
    }else{
        alert(str + " is not a palindrome");
    }
}

check("nurses run");
check("nurbxcs run");
check("madam");
check("vadim");
