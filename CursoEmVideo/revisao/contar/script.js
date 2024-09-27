function contar() {
    let tinicio = document.getElementById('ini')
    let tfim = document.getElementById('fim')
    let tpasso = document.getElementById('passo')
    let res = document.getElementById('res')

    if (tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0) {
        alert('[ERRO] Digite os valores corretamente!')
        res.innerHTML = `Impossivel Contar`
    } else {
        let inicio = Number(tinicio.value)
        let fim = Number(tfim.value)
        let passo = Number(tpasso.value)

        res.innerHTML = ''
        res.innerHTML += `Contando: <br>`

        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }

        if (inicio < fim) {
            for (let i = inicio; i <= fim; i += passo) {
                res.innerHTML += `${i} &#128073`
            }
        } else {
            for (let i = inicio; i >= fim; i -= passo) {
                res.innerHTML += `${i} &#128073`
            }
        }
        res.innerHTML += ` &#127937`
       
    }
}