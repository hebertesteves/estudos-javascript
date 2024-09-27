let btn = document.getElementById('btn')
btn.addEventListener('click', verificar)

function verificar() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoNasc = document.getElementById('tano')
    let sexo = document.getElementsByName('radsex')
    let res = document.querySelector('div#res')
    res.style.textAlign = 'center'
    let img = document.createElement('img')
    let idade = Number(anoAtual) - Number(anoNasc.value)
    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) {
        alert('[ERRO] Digite um ano valido!!');
    } else {
        if (sexo[0].checked) {
            //Homem
            res.innerHTML = `Detectamos Homem com ${idade} anos. `
            if (idade >= 0 && idade <= 8) {
                //Bebe
                img.src = 'bebe-masc.png'
            } else if (idade > 8 && idade <= 18) {
                //Jovem
                img.src = 'jovem-masc.png'
            } else if (idade > 18 && idade <= 65) {
                //Adulto
                img.src = 'adulto-masc.png'
            } else {
                //Idoso
                img.src = 'idoso-masc.png'
            }
        } else if (sexo[1].checked) {
            //Mulher
            res.innerHTML = `Detectamos Mulher com ${idade} anos.`
            if (idade >= 0 && idade <= 8) {
                //Bebe
                img.src = 'bebe-fem.png'
            } else if (idade > 8 && idade <= 18) {
                //Jovem
                img.src = 'jovem-fem.png'
            } else if (idade > 18 && idade <= 65) {
                //Adulto
                img.src = 'adulta-fem.png'
            } else {
                //Idoso
                img.src = 'idosa-fem.png'
            }
        }
        res.appendChild(img)
    }
}