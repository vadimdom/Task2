var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
var o = ["th","st","nd","rd"];
var str = "";
for (var i = 0; i < color.length; i++){
     if (i > 2){
         str = i+1 + o[0] + " choice is " + color[i] + "!";
         console.log(str);
     }else{
         str = i+1 + o[i+1] + " choice is " + color[i] + "!";
         console.log(str);
     }
}