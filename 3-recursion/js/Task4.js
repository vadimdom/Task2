function summa(arr){
    if (arr.length === 1){
        return arr[0];
    }else{
        alert(arr);
        return arr.pop() + summa(arr);
    }
}

alert("Сумма: " + summa([1,2,3,4,5,6]));