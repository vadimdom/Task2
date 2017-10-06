var a = +(prompt("Введите первое число: "));
var b = +(prompt("Введите второе число: "));
var c = +(prompt("Введите третье число: "));
var d = +(prompt("Введите четвёртое число: "));
var e = +(prompt("Введите пятое число: "));
if ( a >= b && a >= c && a >= d && a >= e){
    alert(a);
}else if (  b >= a && b >= c && b >= d && b >= e){
    alert(b);
}else if (  c >= a && c >= b && c >= d && c >= e){
    alert(c);
}else if (  d >= a && d >= b && d >= c && d >= e){
    alert(d);
}else if (  e >= a && e >= b && e >= c && e >= d){
    alert(e);
}