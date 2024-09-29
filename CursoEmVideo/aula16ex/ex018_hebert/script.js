let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        //Esta na lista
        return true
    } else {
        //Não esta lista
        return false
    }
}

function maior(n) {
    let maiorValor = n[0]
    for (let i = 1; i < n.length; i++) {
        if (n[i] > maiorValor) {
            maiorValor = n[i]
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
    let soma = 0
    for (let i in n) {
        soma += n[i]
    }
    return soma
}
 
function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        res.innerHTML = ''
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        item.value = `lista${num.value}`
        valores.push(Number(num.value))
        lista.appendChild(item)
    } else {
        window.alert('Valor invalido ou ja encontrado na lista.')
    }
}

function finalizar() {
    if (valores.length != 0) {
        res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados. <br><br>`
        res.innerHTML += `O maior valor informado foi ${maior(valores)}. <br><br>`
        res.innerHTML += `O menor valor informado foi ${menor(valores)}. <br><br>`
        res.innerHTML += `Somando todos os valores, temos ${somar(valores)}. <br><br>`
        res.innerHTML += `A média dos valores digitados é ${somar(valores) / valores.length}.`
    } else {
        alert('[ERRO] Digite um numero!')
    }
   
}
