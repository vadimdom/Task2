var numb1 = prompt("Введите цифры номера: ");
var numb = [];
for (var i = 0; i <=numb1.length-1; i++){
     numb[i] = numb1[i];
}
var str = [];
var i2 = -1;
var kol = 0;
for (var i = 0; i <=numb.length-1; i++){
    if (numb[i] % 2 === 0 || i == numb.length-1){
        str[kol] = numb.slice(i2+1, i+1).join("");
        kol++;
        i2 = i;
    }
}
alert(str.join("-"));