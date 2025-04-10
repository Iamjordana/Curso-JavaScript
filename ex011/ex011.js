var idade = 80
console.log(`Você tem ${idade} anos.`)

if (idade < 16){
    console.log('Votação não permitida')
} else if(idade <18 || idade > 65){
        console.log('Votação opcional')
} else {
    console.log('Votação obrigatória')
}