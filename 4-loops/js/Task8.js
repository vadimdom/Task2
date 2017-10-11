function happyNum(num) 
{
    var m, n ;
    var mas = [] ;
 
    while(num !== 1 && mas[num] !== true) 
    {
        mas[num] = true ;
        m = 0 ;
        while (num > 0) {
            n = num % 10 ;
            m += n * n ;
            num = (num  - n) / 10 ;
        }
        num = m ;
    }
    return (num === 1) ;
}

var number = 1;
var amount = 0;
var fin = "";
while (amount !== 5){
     while (happyNum(number) !== true){
            number++;
     }
     fin = fin + number + ", ";
     number++;
     amount++;
}
alert(fin);