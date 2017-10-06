var a = +(prompt("Введите первое число: "));
var b = +(prompt("Введите второе число: "));
var del;
while (a!=b)
{
	if (a>b)
	{
		a = a -b;
	}
	else
	{
		b = b - a;
	}
}
del = a;
alert("Наибольший общий делитель: " + del);