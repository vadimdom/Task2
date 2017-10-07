var arr = []; 
var k = 0;

function add(){
    var a = document.getElementById("input").value;
    arr.push(a);
    k++;
    document.getElementById("result").innerHTML= "Элемент успешно добавлен";
}

function display(){
    var str = "";
    for (var i = 0; i < arr.length; i++){
        str = str + i + " element is: " + arr[i] + "<br>"
    }
    document.getElementById("result").innerHTML= str;
}
