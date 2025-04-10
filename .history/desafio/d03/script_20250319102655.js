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
   var f = Number(nf.value)  
   var p = Number(np.value)

   if (i < f){
   for (var c = i; c <= f; c+= p){ 
      res.innerHTML += `${c} \u{1F449}`
   }
   res.innerHTML += `\u{1F3C1}`
   }
   else{
      for (var c = i; c >=f;c -+p)
   }
}
}
