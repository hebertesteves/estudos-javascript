function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manhaa.png'
        window.document.body.style.background = 'rgb(236, 214, 88)'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        img.src = 'tarde.png'
        window.document.body.style.background = '#C57A3E'
    } else {
        //Boa Noite
        img.src = 'noitee.png'
        window.document.body.style.background = '#1B232E'
    }

}



