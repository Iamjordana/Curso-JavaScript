
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')   
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora <12){
        //Bom dia!
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
        } else if(hora >= 12 && hora < 18){{
            //Boa tarde!
            img.src = 'tarde.png'
            document.body.style.background = 'rgb(141, 51, 16)'
        }} else {
            //Boa noite!
            img.src = './imagensnoite.png'
            document.body.style.background = 'rgb(45, 45, 75)'
        }
}
