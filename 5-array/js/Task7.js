/*var arr = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(arr);
arr.sort();
console.log(arr);
*/
var arr = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
console.log(arr);
var bigger,smaller;
for (var i = 0; i < arr.length; i++) {
	for (var j = i+1 ; j < arr.length ; j++) {
		if(arr[i] > arr[j]){
			bigger = arr[i];
			arr[i] = arr[j];
			arr[j] = bigger;
		}
    }
}
console.log(arr);