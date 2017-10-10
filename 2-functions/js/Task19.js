function theSearch(arr, val){
    var fin = "";
    for (var i=0; i<= arr.length-1; i++){
        if (arr[i]> val){
            fin = fin + arr[i] + ", ";
        }
    }
    return fin;
}

function theSearch1(arr, val){
var bigger = arr.filter(function(number) {
    return number > val;
  });
  return bigger;
}


var myArr = [1, 32, 51, 7, 9, 133, 16, 18, 21, 24, 25, 30]
alert("Числа, большие заданного: " + theSearch(myArr, +(prompt("Введите минимальное число: "))));
alert("Числа, большие заданного: " + theSearch1(myArr, +(prompt("Введите минимальное число: "))));