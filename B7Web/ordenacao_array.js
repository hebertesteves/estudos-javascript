let fruits = ['Maça', 'Uva', 'Laranja', 'Banana'];

fruits.sort(); // Altera a ordem ds itens, deixando em ordem alfabetica
fruits.reverse(); // Inverter o array

console.log(fruits);

let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'Bmw', year: 2018},
    {brand: 'Ferrari', year: 2020}
]

cars.sort((a, b) => a.year - b.year);
console.log(cars);