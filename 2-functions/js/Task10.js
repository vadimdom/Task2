function matrix(col){
    var arr = [];
    for (var i=0; i< col; i++){
        arr[i] = [];
        for (var j=0; j< col; j++){
            if (i == j){
                arr[i][j]=1;
            }else{
                arr[i][j]=0; 
            }
        }
        console.log(arr[i]);
    }
}
matrix(4);