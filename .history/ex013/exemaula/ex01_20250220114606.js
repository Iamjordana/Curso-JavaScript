
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')   
    var data = new Date()
   // var hora = data.getHours()
    msg.innerHTML = `Agora são ${data.getHours()} horas.`
    if (data.getHours() >= 0 && data.getHours() < 12){  

}
