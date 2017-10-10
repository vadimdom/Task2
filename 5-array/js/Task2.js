function cloneArray(arr){
    var arr1 = arr.slice(0);
    return arr1;
}


console.log(cloneArray([1, 2, 5, [6, 0]]));