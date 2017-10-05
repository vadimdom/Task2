function delitel(a, b){
    if (a === b){
        return a;
    }
    if (a > b){
        var big = a;
        var low = b;
    }else{
        var big = b;
        var low = a;
    }
    if (big % low === 0){
        return low;
    }
    return delitel(low, big % low);
}

alert("Наибольший общий делитель: " + delitel(+(prompt("Введите первое число: ")), +(prompt("Введите второе число: "))));