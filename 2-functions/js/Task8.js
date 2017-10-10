function isPrime(num){
    for(var i = 2; i <= Math.ceil(num/2); i++){
            if (num%i === 0){
                alert("Это непростое число: " + num);
                break;
            }else if (i === Math.ceil(num/2)){
                alert("Это простое число: " + num);
            }
    }
}

isPrime(+(prompt("Введите число для проверки: ")));