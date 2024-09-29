function tabuada() {
    let num = document.getElementById('tnum')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        //Com While
        // while (c <= 10) {
        //     let item = document.createElement('option')
        //     item.text = `${n} x ${c} = ${n * c}` 
        //     item.value = `tab${c}`
        //     tab.appendChild(item)
        //     c++
        // }

        //Solução com For
        // for (c; c <= 10; c++ ) {
        //     let item = document.createElement('option')
        //     item.text = `${n} x ${c} = ${n * c}`
        //     item.value = `tab${c}`
        //     tab.appendChild(item)
        // }
    }

    
}