var number = +(prompt("Введите число: "));
if (Math.abs(100 - number) <=20 ){
    alert("Число около 100");
}else if(Math.abs(400 - number) <=20){
    alert("Число около 400");
}else{
    alert("Число не около 100 и не около 400");
}