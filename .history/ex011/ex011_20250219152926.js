var idade = 22

if (idade < 16){
    console.log('Votação não permitida')
} else if(idade <18 || >65){
        console.log('Votação opcional')
} else {
    console.log('Votação obrigatória')
}