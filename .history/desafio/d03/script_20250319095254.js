function calcular(){
   var ni = window.document.getElementById('txtni')
   var nf = window.document.getElementById('txtnf')
   var co = window.document.getElementById('cont')

   if(ni.value.length == 0 ||Number(ni.value) > 0 || Number(nf.value) > 0){
      window.alert('[ERRO] Verifique os dados e tente novamente!') 
}
   if (ni.value < nf.value){
      for(var c = Number(ni.value); c <= Number(nf.value); c++){
         co.innerHTML += `${c} \u{1F449}`
      }
   }
}
