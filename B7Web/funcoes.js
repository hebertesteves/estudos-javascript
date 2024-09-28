function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log(`Resultado: ${resultado}`);
}

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

function gravidade() {
    console.log(`A gravidade do planeta é: ${9.8}`);
}

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

somar(10, 20);

gravidade();

let completo = nomeCompleto("João", "Silva");
console.log("Nome Completo: " + completo);

let idade = 14;
let verificacao = maiorDeIdade(idade);
if (verificacao) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você não é maior de idade!");
}

