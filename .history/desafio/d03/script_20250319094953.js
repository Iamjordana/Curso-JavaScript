function calcular(){
   var ni = window.document.getElementById('txti')
   var fano = window.document.getElementById('txtano')
   if(fano.value.length == 0 ||Number(ni.value) > ano){
      window.alert('[ERRO] Verifique os dados e tente novamente!') 
}
}
