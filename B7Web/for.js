for (let i = 0; i < 10; i++) {
    console.log(`Frase ${i}`);
}

let cores = [
    {nome: 'preto', qt: 10},
    {nome: 'azul', qt: 5},
    {nome: 'vermelho', qt: 15}
];

for (let i = 0; i < cores.length; i++) {
    console.log(cores[i].nome);
}

for (let n in cores) { 
    cores[n].nome = cores[n].nome.toUpperCase();
    console.log(cores[n].nome);
}

for(let cor of cores) { 
    console.log(`Nome: ${cor.nome} - Quantidade: ${cor.qt}`);
}