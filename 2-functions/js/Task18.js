function theSearch(arr, elem){
    var half = [];
    var hpos = Math.floor(arr.length/2);
    if (arr[hpos] === elem){
        return hpos;
    }else if(arr.length == 1){
        return null;
    }else if (arr[hpos] < elem){
        half = arr.slice(hpos + 1);
        var res= theSearch(half, elem);
        if (res === null)
        {
           return null;
        }
        else {
           return hpos + 1 + res;
        }
    }else if (arr[hpos] > elem){
        half = arr.slice(0, hpos);
        return theSearch(half, elem);
    }
}

var myArr = [1, 3, 5, 7, 9, 13, 16, 18, 21, 24, 25, 30]
alert("Позиция числа в массиве: " + theSearch(myArr, +(prompt("Введите число, которое ищите: "))));