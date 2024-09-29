function contar() {
    var tinicio = window.document.getElementById('inicio')
    var tfim = window.document.getElementById('fim')
    var tpasso = window.document.getElementById('passo')
    var res = window.document.getElementById('res')
    var inicio = Number(tinicio.value)
    var fim = Number(tfim.value)
    var passo = Number(tpasso.value)

    if (tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1');
            passo = 1;
        }
    
        res.innerHTML = ''
        res.innerHTML = 'Contando: <br>'
    
        if (inicio > fim) {
            for (var i = inicio; i >= fim; i -= passo) {
                res.innerHTML += `${i} &#128073 `
            }
        } else {
            for (var i = inicio; i <= fim; i += passo) {
                res.innerHTML += `${i} &#128073 `
            }
        }
        
        res.innerHTML += ` &#127937`
    }

    

}
