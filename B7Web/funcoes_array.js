let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];

fruits.pop(); // Remove o ultimo
fruits.push('Manga'); // Adiciona por ultimo
fruits.shift(); // Remove o primeiro 
console.log(fruits.join(' => ')); // Vai juntar os elementos do array, com o separador que você quiser, retornando uma string.
fruits[0] = 'Abacaxi';
fruits[fruits.length - 1] = 'Pera';

console.log(fruits);
console.log(fruits.length);