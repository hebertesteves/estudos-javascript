let num = [5, 2, 8, 7 , 9]
// let a = 10
// let b = 11
// num.push(a, b)

num.sort()
num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}


// for (let i = 0; i <= num.length; i++) {
//     console.log(num[i])
// }