function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementBayID('txtano')
    var res = document.querySelector('div#res')
     
    if(fano.value.legth == 0 ||fano.value > ano){
        window.alert('')
    }


}