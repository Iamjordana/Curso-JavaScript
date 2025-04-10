
var num = document.querySelector('#fnum')
var lista = document.querySelector('#flista')
var res = document.getElementById('res')
var val = []


function isNumero(n){

    if (Number(n)>=1 && Number(n) <=100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if ( l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, val)){
        val.push(Number(num.value))
        var item = document.createElement ('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)  
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}

function finalizar(){
    var tot
    var maior
    var menor
    var media
    
}