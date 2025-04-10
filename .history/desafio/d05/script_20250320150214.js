function adicionar(){
 var num = document.getElementById('txtn')

    if ((num.value.length -= 1  ) || (num.value.length += 100) ){ 
        window.alert('Número invalido! Tente novamente.')
    } else if (num.value.length == 0 )  { 
        window.alert('Campo vazio. Digite um número!')
    }


}
