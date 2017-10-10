function greatLow(arr){
    var arrSort = arr.sort(function(a,b){
        return a-b;
    });
    var len = arrSort.length;
    alert("Отсортированный массив: " + arrSort);
    for (var j =1; j<=len; j++){
        if (arrSort[0] !== arrSort[j]){
            var low = arrSort[j];
            break;
        }
    }    
    for (var j =len-2; j>=0; j--){
        if (arrSort[len-1] !== arrSort[j]){
            var great = arrSort[j];
            break;
        }
    }
    alert("Второе наименьшее и наибольшее: " + low + ", " + great);
}

greatLow([3,5,1,1,1,3,8,32,2,6]);
greatLow([1,2,3,4,5]);