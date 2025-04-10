
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
    num.value = ''
    num.focus()
}

function finalizar(){
    var tot = val.length
    var maior = val[0]
    var menor = val[0]
    var media = 0
    var soma = 0
    if (valor == 0){
        window.alert('Adicione valores antes de finalizar.')
    } else {
        for (var pos in val){
            soma += val[pos]
            if (val[pos] > maior)
                maior = val[pos]
            if (val[pos] < menor)
                menor = val[pos]
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>` 


    

    }

