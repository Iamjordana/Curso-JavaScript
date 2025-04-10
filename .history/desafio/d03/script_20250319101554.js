function contar(){
   var ni = window.document.getElementById('txtni')
   var nf = window.document.getElementById('txtnf')
   var np = window.document.getElementById('txtnp')
   var res = window.document.getElementById('cont')

   if(ni.value.length == 0 ||(nf.value.length) == 0 ||(np.value.length ) == 0){
      window.alert('[ERRO] Verifique os dados e tente novamente!') 
} else {
   res.innerHTML = 'Contando: <br>'  
   var i = Number(ni.value)
   var f = Number(txtnf.value)  
   var p = Number(txtnp.value)

}  
   if (ni < nf){ 
      for (var c = ni; c <= nf; c+= np){
         res.innerHTML += `${c} \u{1F449}`
      }

   }
}
