function delitel(a, b){
    if ((a >= b && a % b === 0) || a === b){
        return b;
    }else if ( b >= a && b % a === 0){
        return a
    }else if (a % 2 === 0 && b % 2 === 0){
        return 2*delitel(a/2, b/2)
    }else{
        return 1;
    }
}

alert("Наибольший общий делитель: " + delitel(+(prompt("Введите первое число: ")), +(prompt("Введите второе число: "))));