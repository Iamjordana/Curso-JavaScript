var idade = 12
if (idade < 16){
    console.log('Votação não permitida')
} else {
    if(idade >=16 && idade <18){
        console.log('Votação opcional')
    }else {
        console.log('Votação obrigatória')
    }
}