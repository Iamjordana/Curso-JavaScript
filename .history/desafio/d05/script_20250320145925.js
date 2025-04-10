function adicionar(){
 var num = document.getElementById('txtn')
 var tab = document.getElementById('seltab')

    if ((num.value.length ) || (num.value.length += 100) ){ 
        window.alert('Número invalido! Tente novamente.')
    } else { 
        window.alert('Campo vazio. Digite um número!')
    }


}
