var agora = new Date()  //cria um objeto com a data e hora atual do sistema que esta sendo 
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if(hora <= 12){
    console.log('Bom dia!')
} else if(hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')} 