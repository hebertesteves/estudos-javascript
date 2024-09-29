var agora = new Date()
var hora = agora.getHours()
var txtHora = window.document.getElementById('div1')


if (hora < 12) {
    window.document.body.style.background =  'rgb(236, 214, 88)'
    txtHora.innerHTML = `<center> Agora são ${hora} horas. <center>`

}
