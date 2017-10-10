function theGenerate(len){
    var fin = "";
    var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i=0; i<= len-1; i++){
        fin = fin + list[(Math.ceil(Math.random() * list.length))];
    }
    return fin;
}

alert("Рандомная строка: " + theGenerate(+(prompt("Задайте длину случайной строки: "))));