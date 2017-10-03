function converting(str){
    var arr1 = str.split(" ");
    var arr = [];
    for(var i = 0; i < arr1.length; i++){
        arr[i]=arr1[i].charAt(0).toUpperCase()+arr1[i].slice(1);
    }
    var str1 = arr.join(" ");
    alert(str1);
}

converting(prompt("Введите строку для изменения: "));