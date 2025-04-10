
var num = document.querySelector('#fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var val = []


function isNumero(n){

    if (Num(n)>=1 && Num(n) <=100){
        return
    } else {
        return false
    }
}

function inLista(n){
    if (val.indexOf(Num(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar(){
    if (isNumero(num.value)&& !inLista(num.value)){ 
        
    } else { 
        window.alert('Número invalido ou já encontrado! Tente novamente.')
    }
    
}
