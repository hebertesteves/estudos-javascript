function carregar(){
    let data = new Date()
    let hora = data.getHours()
    let msg = document.getElementById('msg')
    let img = document.createElement('img')
    let res = document.getElementById('res')
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <= 12) {
        //Manhã
        img.src = 'manhaa.png'
        document.body.style.background = 'rgb(236, 214, 88)'
    } else if(hora > 12 && hora <= 18) {
        //Tarde
        img.src = 'tarde.png'
        document.body.style.background = '#C57A3E'
    } else {
        //Noite
        img.src = 'noitee.png'
        document.body.style.background = '#1B232E'
    }

    res.appendChild(img)
}