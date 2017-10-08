function theCount(str){
    var uni = "";
    for (var i = 0; i <= str.length-1; i++){
        if (uni.indexOf(str.charAt(i)) < 0){
            uni += str[i];
        }
    }
    alert("Все уникальные символы: " + uni);
    for (var i = 0; i<= uni.length-1; i++){
        var col = 0;
        var pos = 0;
        while (true) {
          var foundPos = str.indexOf(uni[i], pos);
          if (foundPos === -1) break;
          col++;
          pos = foundPos + 1; 
        }
        alert("Количество вхождений символа '" + uni[i] + "' равно: " +col);
    }   
}

theCount(prompt("Введите строку: "));