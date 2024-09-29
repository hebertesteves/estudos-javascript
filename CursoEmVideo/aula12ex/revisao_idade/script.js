function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_nasc = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (Number(ano_nasc.value) > ano_atual || ano_nasc.value.length == 0) {
        window.alert('[ERRO] Data de Nascimento Invalida')
    }

    var sexo = window.document.getElementsByName('radsex')
    var idade = ano_atual - Number(ano_nasc.value)
    var img = window.document.createElement('img')
    img.setAttribute('id', 'foto')
    res.style.textAlign = 'center'

    if (sexo[0].checked) {
        res.innerHTML = `Detectamos Homem com ${idade} anos.`
        if (idade >= 0 && idade <= 12) {
            //Criança
           img.setAttribute('src', 'bebe-masc.png')
        } else if (idade > 12 && idade <= 18) {
            //Adolecente 
            img.src = 'jovem-masc.png'
        } else if (idade > 18 && idade < 65) {
            // Adulto 
            img.setAttribute('src', 'adulto-masc.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idoso-masc.png')
        }

    } else if (sexo[1].checked) {
        res.innerHTML = `Detectamos Mulher com ${idade} anos.`
        if (idade >= 0 && idade <= 12) {
            //Criança
           img.setAttribute('src', 'bebe-fem.png')
        } else if (idade > 12 && idade <= 18) {
            //Adolecente 
            img.src = 'jovem-fem.png'
        } else if (idade > 18 && idade < 65) {
            // Adulto 
            img.setAttribute('src', 'adulta-fem.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idosa-fem.png')
        }
        //Mulher
    }

    res.appendChild(img)
}