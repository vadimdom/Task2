function isPrime(num1){
    var num = +num1;
    for(var i = 2; i <= Math.ceil(num/2); i++){
            if (num%i == 0){
                alert("Это непростое число: " + num);
                break;
            }else if (i == Math.ceil(num/2)){
                alert("Это простое число: " + num);
            }else{
                continue;
            }
    }
}

isPrime(prompt("Введите число для проверки: "));