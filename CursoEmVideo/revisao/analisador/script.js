let num = document.querySelector('input#fnum')
let sel = document.getElementById('selnum')
let valores = []
let res = document.getElementById('res')

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(n) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumber(Number(num.value)) && !inLista(num.value, valores)) {
        res.innerHTML = ''
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado. `
        item.value = `sel{num}`
        sel.appendChild(item)
    } else {
        alert('Valor invalido ou ja encontrado na lista.')
    }
    num.focus()
    num.value = ''
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        
    
        for (let i in valores) {
            soma += valores[i]
            if (valores[i] > maior) {
                maior = valores[i]
            }
    
            if (valores[i] < menor) {
                menor = valores[i]
            }
        }
        let media = soma / tot
    
        res.innerHTML = `Ao todo temos ${tot} números cadastrados. <br><br>`
        res.innerHTML += `O maior valor informado foi ${maior}. <br><br>`
        res.innerHTML += `O menor valor informado foi ${menor}.<br><br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}. <br><br>`
        res.innerHTML += `A média dos valores digitados é ${media} <br><br>`
    }

   
}