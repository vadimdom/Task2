function toPow(a, b){
    var rez = 1;
    for (var i = 1; i <=b; i++){
        rez *=a;
    }
    alert("Результат: " + rez);
}

toPow(+(prompt("Введите число для возведения в степень: ")), +(prompt("Введите степень: ")));