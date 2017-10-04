var str = prompt("Введите строку: ");
if (str.length < 2){
    str = prompt("Введите строку подлиннее: ");
}
var str1 = str[str.length-1] + str.substring(1, str.length-1) + str[0];
alert(str1);