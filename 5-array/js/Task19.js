var arr1 = [1,0,2,3,4,2,23,12];
var arr2 = [3,5,6,7,8,13];
var len1 = arr1.length;
var len2 = arr2.length;
if (len1 >= len2){
    var len = len1;
    var min = len2;
    var arMax = arr1;
}else{
    var len = len2;
    var min = len1;
    var arMax = arr2;
}
var arr =[];
for (var i =0; i < min; i++){
    arr[i] = arr1[i] + arr2[i];
}
for (var i =min; i < len; i++){
    arr[i] = arMax[i];
}
console.log(arr);