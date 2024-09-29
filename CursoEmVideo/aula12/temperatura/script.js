function converter() {
    var temp = window.document.getElementsByName('radtemp')
    var valorTemperatura = window.document.getElementById('txttemp')
    var res = window.document.getElementById('res')
    var temperaturaC
    if (temp[0].checked) {
        temperaturaC = (valorTemperatura.value * 1.8) + 32
        res.innerHTML = `Temperatura equivalente em Fahrenheit: <strong> ${temperaturaC.toFixed(2)} </strong>`
    } else if (temp[1].checked) {
        temperaturaC = (5 / 9) * (valorTemperatura.value - 32)
        res.innerHTML = `Temperatura equivalente em Celcius: <strong> ${temperaturaC.toFixed(2)} </strong>`
    }
    

}