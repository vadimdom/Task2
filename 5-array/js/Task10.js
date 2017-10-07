var arr = [[1, 2, 1, 24, 43, 1, 1, 42], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
for (var i = 0; i < arr.length; i++){
	console.log("Row " + i + ": ");
	var arr1 = [];
	for (var j = 0; j < arr[i].length; j++){
		arr1[j] = arr[i][j];
		console.log(arr1[j]);
	}
	console.log(arr1);
}