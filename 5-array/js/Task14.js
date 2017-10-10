//var arr = [1, 2, 35, 2, 231, 35, 76, 1, 23, 65, 12];
var arr = [1, 1, 1, 1, 1, 5, 5, 5, 1, 1];
var len = arr.length;
alert(arr);
for (var i = 0; i < len; i++){
    for (var j = i+1; j < len; j++){
        if ( arr[i] == arr[j] ){
            arr.splice(j, 1);
            j--;
            len--;
        }
    }
}
alert(arr);