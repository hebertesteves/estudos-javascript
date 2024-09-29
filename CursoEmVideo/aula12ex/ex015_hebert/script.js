function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var txtano = window.document.getElementById('txtano')
    var txtmasc = window.document.getElementById('masc')
    var txtfem = window.document.getElementById('fem')
    var res = window.document.getElementById('res')
    var ano_nasc = Number(txtano.value)
    var masc = txtmasc.value
    var fem = txtfem.value
    var idade = ano - ano_nasc
    if (masc == 'Masculino') {
        res.innerHTML = `Dectamos Homem com ${idade} anos.`
    } 
    if (fem == 'Feminino') {
        res.innerHTML = `Dectamos Mulher com ${idade} anos.`
    }
}

function Masculino() {
    console.log('Testando...')
}