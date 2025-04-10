
var num = document.querySelector('#fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var val = []

function adicionar(){
    if (isNumero(num.value.length < 1  ) || (num.value.length > 100) ){ 
        window.alert('Número invalido! Tente novamente.')
    } 
}
