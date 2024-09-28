// let personagem = {
//     nome: 'Hebert',
//     idade: 18,
//     pais: 'Brasil',
//     olhos: ['preto', 'azul'],
//     caracteristicas: {
//         forca: 20,
//         inteligencia: 100,
//         stamina: 30
//     }
// }

// personagem.nome = 'Pedro';
// personagem.caracteristicas.forca += 5;
// personagem.olhos.push('verde');

// console.log(`${personagem.nome} tem ${personagem.idade} anos e mora no ${personagem.pais}.`);
// console.log(personagem.caracteristicas.inteligencia);
// console.log(personagem.olhos[0]);
// console.log(`Força: ${personagem.caracteristicas.forca}`);
// console.log(personagem.olhos);


let pessoa = {
    nome: 'Hebert',
    idade: 90,
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ferari', cor: 'vermelho'}
    ]
}

console.log(pessoa.carros[0].cor);
console.log(pessoa.carros[1].modelo);


let pessoas = {
    nome: 'Hebert',
    sobrenome: 'Esteves',
    idade: 90,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

console.log(pessoas.nomeCompleto());