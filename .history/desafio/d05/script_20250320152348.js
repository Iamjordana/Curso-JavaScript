
var num = document.querySelector('#fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var val = []


function isNumero(n){

    if (Number(n)>=1 && Number(n) <=100){
        return
    } else {
        return false
    }
}

function inLista(n, l){
    if ( ){

    }

}

function adicionar(){
   if(isNumero(num.value) && !inLista(num.value, val)){
    window.alert('Tudo ok')
   } else {
       window.alert('Valor inválido ou já encontrado na lista')
   }
    
}
