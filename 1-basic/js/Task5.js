function perestanovka(){
    setInterval(function()
    {
    var a=document.getElementById("string").innerHTML;
        var b=a.substring(1);
        var first = a[0];
        a=b + first;
        document.getElementById("string").innerHTML=a;
    }, 100);
}