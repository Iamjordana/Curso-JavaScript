function fatorial() {
    var fat = 1
    for (var c = num; c >1;c--){
        fat *= c
    }
    return fat 
}

console.log(fatorial(5)) // 120