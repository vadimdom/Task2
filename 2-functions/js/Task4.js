function sorting(str){
    var arr= str.split("");
    alert("Отсортированная строка: " + arr.sort().join(""));
}

sorting(prompt("Введите строку для сортировки: "));