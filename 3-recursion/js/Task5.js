function exp(a, b){
    if (b === 1){
        return a;
    }else{
        return a*exp(a, b-1);
    }
}

alert("Число в степени: " + exp(+(prompt("Введите основание: ")), +(prompt("Введите степень: "))));