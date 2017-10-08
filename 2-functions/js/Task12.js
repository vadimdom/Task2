function isPerfect(num1){
    var num = num1;
    var sum = 0;
    for(var i = 1; i <= Math.ceil(num/2); i++){
            if (num%i === 0){
                sum += i;
            }
    }
    if (sum === num){
        alert(num + " is a perfect number!");
    }else{
        alert(num + " is not a perfect number!");
    }
}

isPerfect(+(prompt("Введите число для проверки: ")));