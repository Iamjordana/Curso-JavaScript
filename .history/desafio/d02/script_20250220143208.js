function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementBayID('txtano')
    var res = document.querySelector('div#res')
     
    if(fano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 

}