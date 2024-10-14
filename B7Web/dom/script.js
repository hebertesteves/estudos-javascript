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

    const newButton = document.createElement('button');
    newButton.innerHTML = 'Botão';

    let newUl = document.createElement('ul');
    for (let i = 0; i < 5; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = `Item add ${i + 1}`;
        newUl.append(newLi);
    }

    ul.after(newButton); // After = Depois
    ul.before(newUl); // Before = Antes

    const input = document.querySelector('input');

    console.log(input.getAttribute('type'));
    if (input.hasAttribute('placeholder')) {
        console.log("Tem placeholder sim");
    } else {
        console.log("Não tem placeholder");
    }
    input.setAttribute('placeholder', 'Placeholder alterado');


    const li = document.querySelector('li');

    li.style.backgroundColor = '#00F';
    li.style.fontSize = '30px';

    li.classList.add('azul');
    li.classList.remove('azul');
    li.classList.toggle('azul');

    

    
    
}

function mostrarSenha() {
    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');
    if (input.getAttribute('type') == 'text') {
        input.setAttribute('type', 'password');
        botao.innerHTML = 'Mostrar senha';
    } else {
        input.setAttribute('type', 'text');
        botao.innerHTML = 'Esconder senha';

    }
}

