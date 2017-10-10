function toCoins(num, arr){
    if (num == 0){
        return [];
    }
    if (num < arr[0]){
        arr.shift();
        return toCoins(num, arr);
    }
    if (num >= arr[0]){
        num -= arr[0];
        return [arr[0]].concat(toCoins(num, arr));
    }
}

alert(toCoins(+(prompt("Введите число для разложения на слагаемые: ")), [25, 10, 5, 2, 1]));