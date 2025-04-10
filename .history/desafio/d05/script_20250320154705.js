
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
        var item = DocumentTimeline.createElement ('option')
        item.text = ''
        lista.appendChild(item)  
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}
