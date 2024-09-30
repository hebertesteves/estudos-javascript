/* Selecionando Elementos:

document.getElementsByTagName('h1')[0];
document.getElementById('teste');
document.getElementsByClassName('botao')[0];
document.querySelectorAll('#teste ul li');
document.querySelector('btn');

*/

/* Adicionar Evento via JavaScript
let botao = document.querySelector('.botao');
botao.addEventListener('click', () => {
    clicou();
});
*/

function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    ul.children[0].innerHTML = 'Item 1 <strong>alterado!</strong>';

    ul.children[1].append("(alterado)");

    ul.innerHTML += "<li> Item alterado</li>";

    let newLi = document.createElement("li");
    newLi.innerText = 'Item adicionado!!!';
    ul.appendChild(newLi);
    ul.prepend(newLi);
}

