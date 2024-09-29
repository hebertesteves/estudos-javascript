var b = document.getElementById('btn')
b.addEventListener('click', cadastrar)

function cadastrar() {
    let sex = document.getElementsByName('radsex')
    let res = document.querySelector('div#res')
    if (sex[0].checked) {
        res.innerHTML = 'O seu genero é Masculino'
    } else if (sex[1].checked) {
        res.innerHTML = 'O seu genero é Feminino'
    }
}