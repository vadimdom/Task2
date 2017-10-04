function toFactors(num1){
    var num = +num1;
    var arr = [];
    var j =0;
    for(var i = 1; i <= Math.ceil(num/2); i++){
            if (num%i == 0){
                arr[j]=i;
                j++;
            }else{
                continue;
            }
    }
    alert(arr.join(", "));
}

toFactors(prompt("Введите число для разложения: "));