var a = 5;
var b = 6;
var c = 7;
var p= (a+b+c)/2;
var s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log("Area of triangle with sides 5, 6, 7 by Heron's formula is: " + s);