function tabuada() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        alert('[ERRO] Digite um numero, por favor! ')
    } else {
        let n = Number(num.value)
        tab.innerText = ''
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = ` ${n} x ${i} = ${n * i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}