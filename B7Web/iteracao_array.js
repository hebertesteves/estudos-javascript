let fruits = ['Banana', 'Laranja', 'Maça', 'Pera', 'Uva'];

let bigFruits = fruits.filter((value) => value.length > 4);
console.log(bigFruits);

let ok = fruits.every((value) => value.length > 3);
let verificao = fruits.some((value) => value.length > 3);

if (ok) {
    console.log("Todos são maior que 3");
} else {
    console.log("Não são todos maior que 3")
}

if (verificao) {
    console.log("Algum item é maior que 3");
} else {
    console.log("Nenhum item é maior que 3");
}

if (fruits.includes('Uva')) {
    console.log("Tem uva sim!");
} else {
    console.log("Não tem uva...");
}