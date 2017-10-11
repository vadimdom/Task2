var str = prompt("Введите строку: ");
var n = +(prompt("Введите номер удаляемого символа: "));
alert(str.substring(0, n) + str.substring(n+1));