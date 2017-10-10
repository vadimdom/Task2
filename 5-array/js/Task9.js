var str = prompt("Введите строку: ", "The Quick Brown Fox");
alert(str);
var str1 = [];
for (var i = 0; i < str.length; i++){
	var prov = str[i].toUpperCase();
	if (prov === str[i]){
	   str1[i] = str[i].toLowerCase();
	}else{
	   str1[i] = str[i].toUpperCase();
	}
}
alert(str1.join(""));