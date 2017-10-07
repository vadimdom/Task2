var arr = [1, 2, 1, 24, 43, 1, 1, 42];
var sum = 0;
for (var i = 0; i < arr.length; i++){
     sum += arr[i]*arr[i];
}
alert("Сумма квадратов элементов массива [" + arr + "] равна: " + sum);