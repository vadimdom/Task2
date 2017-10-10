var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
alert(arr);
var indexNew = 0;
var temp = 0;
for (var i = 0; i < arr.length; i++){
    indexNew = Math.floor(Math.random()*arr.length);
    temp = arr[indexNew];
    arr[indexNew] = arr[i];
    arr[i] = temp;
}
alert(arr);