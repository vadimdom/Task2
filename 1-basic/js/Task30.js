var str = prompt("Введите строку: ");
if (str.indexOf("Script") === 4){
    alert(str.substring(0, 4) + str.substring(4 + "Script".length));
}else{
    alert(str);
}