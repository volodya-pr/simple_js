function fibo(n) {
    var a = 1,
        b = 1;
    for (var i=3; i <=n; i++) {
        var c=a+b;
        a=b;
        b=c;
    
    }
    return c;
}
var n = Number(prompt('Введіть число'));
alert (fibo(n));