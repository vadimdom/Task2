function integ(a, b){
    if (b - a === 2){
        return [a + 1];
    }else{
        var fin = integ(a, b-1);
        fin.push(b-1);
        return fin;
    }
}

alert("Целые числа из промежутка: " + integ(+(prompt("Введите первое число: ")), +(prompt("Введите второе число: "))));