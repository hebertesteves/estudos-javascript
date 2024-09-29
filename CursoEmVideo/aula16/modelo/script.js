let num = document.getElementById('txtnum')
let sel = document.getElementById('selnum')
let valores = []
let res = document.getElementById('res')

function adicionar(){
    if (num.value.length == 0) {
        alert('ERRO')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        item.value = `sel${num.value}`
        valores.push(num.value)
        sel.appendChild(item)
    }
}

function maior(n) {
    let maiorValor = n[0]
    for (let i = 1; i < n.length; i++) {
        if (n[i] > maiorValor) {
            maiorValor = n[i]
            console.log(maiorValor)
        }
    }
    return maiorValor
}

function menor(n) {
    let menorValor = n[0]
    for (let i = 1; i < n.length; i++) {
        if (n[i] < menorValor) {
            menorValor = n[i]
        }
    }
    return menorValor 
}

function somar(n) {
    let somaValor = 0
    for (let i = 0; i < n.length; i++) {
        somaValor += n[i]
    }
    return somaValor
}

function finalizar() {
    res.innerHTML = `Ao todo, temos ${valores.length} numeros cadastrados <br>`
    res.innerHTML += `O maior valor informado foi ${maior(valores)} <br> `
    res.innerHTML += `O menor valor informado foi ${menor(valores)} <br>`
    res.innerHTML += `Somando todos os valores, temos ${somar(valores)} <br>`
    res.innerHTML += `A média dos valores digitados é ${somar(valores) / valores.length}`
}