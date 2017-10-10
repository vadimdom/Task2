var number = +(prompt("Введите число: "));
if (number > 19){
    alert("Число больше 19, их утроенная разность равна: " + 3*(number - 19));
}else{
    alert("Модуль разности числа и 19 равен: " + Math.abs(number - 19));
}