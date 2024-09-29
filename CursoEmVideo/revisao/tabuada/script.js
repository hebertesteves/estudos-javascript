let btn = document.querySelector('input#btntab');
btn.addEventListener('click', tabuada);

function tabuada() {
    let num = document.getElementById('tnum')
    let tab = document.getElementById('seltab')

    
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = ''
        // For
        // for (let i = 1; i <= 10; i++) {
        //     let item = document.createElement('option')
        //     item.text = `${num.value} x ${i} = ${num.value * i}`
        //     item.value = `tab{i}`
        //     tab.appendChild(item)
        // }
    
        // While
        let i = 1
        while (i <= 10) {
            let item = document.createElement('option')
            item.text = `${num.value} x ${i} = ${num.value * i}`
            item.value = `tab{i}`
            tab.appendChild(item)
            i++
        }

    }
}