var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(arr);
var amount = [];
for (var i = 0; i < arr.length; i++){
	amount[i] = 0;
	for (var j = 0 ; j < arr.length ; j++) {
		if(arr[i] == arr[j]){
			amount[i]++;
		}
    }
}
var max = 0;
for (var i = 0; i < amount.length; i++){
		if(amount[i] > max){
            max = amount[i];
			var imax = i;
		}
}
console.log(arr[imax] + " ( " + amount[imax] + " times)");