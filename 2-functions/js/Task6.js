function findingLongest(str){
    var arr = str.split(" ");
    var len = 0;
    var longest = "";
    for(var i = 0; i < arr.length; i++){
        if (arr[i].length > len){
            len = arr[i].length;
            longest = arr[i];
        }
        alert(arr[i]);
    }
    alert(longest);
}

findingLongest(prompt("Введите строку для поиска: "));//Web Development Tutorial