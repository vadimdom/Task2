var arr = [1,1,1,1,1,0,2,3,4,2,23,12];
alert(arr);
    var uni = [];
    for (var i = 0; i < arr.length; i++){
        if (uni.indexOf(arr[i]) < 0){
            uni.push(arr[i]);
        }
    }
    alert(uni);