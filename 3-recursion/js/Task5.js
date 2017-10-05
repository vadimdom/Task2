function exp(a, b){
    if (b === 1){
        return a;
    }else{
        return a*exp(a, b-1);
    }
}

alert("Целые числа из промежутка: " + exp(+(prompt("Введите основание: ")), +(prompt("Введите степень: "))));