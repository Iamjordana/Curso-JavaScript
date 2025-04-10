//var num = [5,8,4];//0,1,3,... ordem de colocação
num.push(1);
num.sort();
// num[3] = 6; //adiciona o valor 6 na posição 3
// num.push(7); adiciona o valor 7 na última posição
// num.length; tamanho do vetor
// num.sort(); ordena o vetor - ordem crescente
console.log(num);
console.log(`O vetor é ${num}`);
console.log(`O vetor tem  ${num.length} posições`); 
console.log(`O primeiro valor do vetor é ${num[0]}`);

for (var pos = 0, pos<num.legth ;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);  
}