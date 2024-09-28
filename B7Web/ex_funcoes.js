/*
Calcule a porcentagem entre 2 números
Exemplo: 25% de 40 é 10
Formula da porcentagem (y / x) * 100
*/

function calcPct(n1, n2) {
    return (n2 / n1) * 100;
}

let x = 50;
let y = 20;
let pct = calcPct(x,y);
console.log(`${pct}% de ${x} é ${y}`);

// ------------------------------------------------- //

/*
Calcule o preço do imovel
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
*/

function calcularImovel(m, q) {
    let m2 = 3000;

    if (q == 1) m2 *= 1;
    else if (q == 2) m2 *= 1.2;
    else if (q == 3) m2 *= 1.5;

    return m * m2;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

// ------------------------------------------------- //

/*
Crie uma função que validde usuario e senha
Usuario correto: pedro
Senha correta: 123
*/

function validar(usuario, senha) {
    if (usuario === 'pedro' && senha === '123') {
        return true;
    } else {
        return false;
    }
}

let usuario = 'pedro';
let senha = '123';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log("Acesso concedido.");
} else {
    console.log("Acesso NEGADO!");
}