function cToF(c){
    var f = (c/5)*9+32;
    var mes = c + "°C is " + f + "°F";
    console.log(mes);
}

function fToC(f){
    var c = (f-32)/9*5;
    var mes = f + "°F is " + c + "°C";
    console.log(mes);
}

cToF(60);
fToC(45);