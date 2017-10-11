function factor(a){
    if (a === 1){
        return 1;
    }else{
        return a*factor(a-1);
    }
}

alert(factor(+(prompt("Введите число для факториала: "))));