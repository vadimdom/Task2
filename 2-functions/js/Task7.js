function findingVowels(str){
    var vowels = ["a", "e", "i", "o", "u"];
    var count = 0;
    for(var i = 0; i < str.length; i++){
        for (var j=0; j<=vowels.length; j++){
            if (str[i].toLowerCase() == vowels[j]){
                count++;
            }
        }
    }
    alert("Количество гласных букв в строке: " + count);
}

findingVowels(prompt("Введите строку для поиска гласных: "));//Web Development Tutorial