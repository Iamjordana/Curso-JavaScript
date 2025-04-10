function calcular(){
for (var i = 1; i <= 10; i++) {
    var num = parseInt(document.getElementById("num" + i).value);
    var res = num * 10;
    document.getElementById("calculo" + i).value = res;
    
}   
}