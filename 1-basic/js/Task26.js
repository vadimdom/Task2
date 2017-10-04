var str = prompt("Введите строку: ");
if (str.length < 3){
    str = prompt("Введите строку подлиннее: ");
}
var str1 = str.substring(str.length-3) + str + str.substring(str.length-3);
alert(str1);