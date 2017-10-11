var a = +(prompt("Введите первое число: "));
var b = +(prompt("Введите второе число: "));
if (a > b){
    alert(a + " > " + b);
}else if (b > a){
    alert(b + " > " + a);
}else{
    alert("Числа равны или неверный ввод");
}