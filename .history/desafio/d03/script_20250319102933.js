function contar(){
   var ni = window.document.getElementById('txtni')
   var nf = window.document.getElementById('txtnf')
   var np = window.document.getElementById('txtnp')
   var res = window.document.getElementById('cont')

      res.innerHTML = 'Impossível contar!'
} else {
   res.innerHTML = 'Contando: <br>'  
   var i = Number(ni.value)
   var f = Number(nf.value)  
   var p = Number(np.value)

   if (i < f){
      //contagem crescente
   for (var c = i; c <= f; c+= p){ 
      res.innerHTML += `${c} \u{1F449}`
   }
}
   //contagem decrescente 
   else{
      for (var c = i; c >=f;c -=p){
         res.innerHTML += `${c} \u{1F449}`
      }
      res.innerHTML += `\u{1F3C1}`
   }
}
}
