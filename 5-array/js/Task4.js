function last(arr, n){
    if (arr[0] === undefined ){
        return arr;
    }else if (n >= arr.length){
        return arr;
    }else if (n >=1){
        return arr.slice(arr.length-n);
    }else if (n === undefined){
        return arr[arr.length-1];
    }else if (n < 0){
        var arr1 = [];
        return arr1;
    }
}

console.log(last([7, 9, 0, -2])); 
console.log(last([],3));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
console.log(last([7, 9, 0, -2],-3));