
var num = document.querySelector('#fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var val = []

function adicionar(){
    if (isNumero(num.value)&& !inLista(num.value, val)){ 
        window.alert('Número invalido! Tente novamente.')
    } else if 
}
