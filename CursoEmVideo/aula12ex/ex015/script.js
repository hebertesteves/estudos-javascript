function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = window.document.getElementsByName('radsex')
       var idade = ano - Number(fAno.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'bebe-masc.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'jovem-masc.png')
        } else if(idade < 50) {
            img.setAttribute('src', 'adulto-masc.png')
        } else {
            img.setAttribute('src', 'idoso-masc.png')
        }


       } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'bebe-fem.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'jovem-fem.png')
        } else if(idade < 50) {
            img.setAttribute('src', 'adulta-fem.png')
        } else {
            img.setAttribute('src', 'idosa-fem.png')
        }

       }

       res.style.textAlign = 'center'
       res.innerHTML = `Dectamos ${genero} com ${idade} anos`
       res.appendChild(img)

    }
}
