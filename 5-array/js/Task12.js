var arr = [1, 2, 1, 24, 43, 1, 1, 42];
var sum = 0;
var proiz = 1;
for (var i = 0; i < arr.length; i++){
     sum += arr[i];
     proiz *= arr[i];
}
alert("Сумма элементов массива [" + arr + "] равна: " + sum + ", произведение: " + proiz);