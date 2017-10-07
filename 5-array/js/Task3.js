function first(arr, n){
    if (arr[0] == undefined || n == undefined){
        return arr;
    }else if (n >=1){
        return arr.slice(0, n);
    }else{
        var arr1 = [];
        return arr1;
    }
}

console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));