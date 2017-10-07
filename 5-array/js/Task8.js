var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(arr);
var kol = [];
for (var i = 0; i < arr.length; i++){
	kol[i] = 0;
	for (var j = 0 ; j < arr.length ; j++) {
		if(arr[i] == arr[j]){
			kol[i]++;
		}
    }
}
var max = 0;
for (var i = 0; i < kol.length; i++){
		if(kol[i] > max){
            max = kol[i];
			var imax = i;
		}
}
console.log(arr[imax] + " ( " + kol[imax] + " times)");