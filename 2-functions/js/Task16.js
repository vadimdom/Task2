function theUnique(str){
    var uni = "";
    for (var i = 0; i <= str.length-1; i++){
        if (uni.indexOf(str.charAt(i)) < 0){
            uni += str[i];
        }
    }
    alert(uni);
}

theUnique(prompt("Введите строку: "));