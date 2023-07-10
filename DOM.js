// Pegar pelo id
document.getElementById('id');

// Pegar pela class
document.getElementsByClassName('class');

// Pegar pela tag
document.getElementByTagName('tag HTML');

// Seletor CSS (Trás apenas o primeiro)
document.querySelector('.class');

// Seletor CSS (Trás todos - Nodelist)
document.querySelectorAll('#id');

// Alterar ou adicionar um texto (textContent e innerText)
const element = document.querySelector('h1');
element.textContent = "Olá Devs!";
element.innerText = "Olá Devs!";

// Adicionar HTML
element.innerHTML = "Olá Devs! <small>!!!</small>";

// Adicionar um valor no input ou qualquer elemento que receba value
const element = document.querySelector('input');
element.value = "Adiciona valor";

// Manipulando atributos
const header = document.querySelector('header');
header.setAttribute('id', 'bg'); // Adiciona um id chamado bg ao header
header.removeAttribute('id'); // Remove o id do header
header.setAttribute('class', 'bg'); // Adiciona um class chamado bg ao header
header.removeAttribute('class'); // Remove o class do header

// Alterar estilos
const element = document.querySelector('body');
element.style.backgroundColor = "#ffffff"; // Adiciona a propriedade CSS
// ClassList
element.classList.add('active'); // Adiciona a class active ao body
element.classList.remove('active'); // Remove a class active do body
element.classList.toggle('active'); // Se a class existir ele remove, se não existir, ele adiciona

// Pegar o pai dos elementos
const element = document.querySelector('body');
body.parentNode;
body.parentElement;

// Pegando elementos filhos
const element = document.querySelector('body');
element.childNodes;
element.children;
element.firstChild; // Leva em consideração espaços vazios no HTML
element.firstElementChild; // Não leva em consideração espaços vazios no HTML
element.lastChild;
element.lastElementChild;

// Navegar por elementos irmãos
const element = document.querySelector('header');
element.nextSibling; // Leva em consideração espaços vazios no HTML
element.nextElementSibling; // Não leva em consideração espaços vazios no HTML
element.previousSibling; // Leva em consideração espaços vazios no HTML
element.previousElementSibling; // Não leva em consideração espaços vazios no HTML

// Criando e adicionando elementos no HTML
const div = element.createElement('div'); // Cria o elemento div
div.innerText = "Olá Devs!"; // Adiciona um texto ao elemento criado

const body = element.querySelector('body');
body.append(div); // Adiciona depois de todo HTML (ultimo filho)
body.prepend(div); // Adiciona antes de todo HTML (primeiro filho)

const script = body.querySelector('script');
body.insertBefore(div, script); // Adiciona o elemento div antes do elemento script


// Eventos
// onclick = "print()"
function print() {
  console.log('print');
}

const input = document.querySelector('input');
input.onkeydown = function () {
  console.log('rodei');
}

const h1 = document.querySelector('h1');
h1.addEventListener('click', print); // Adiciona o evento e a função
function print() {
  console.log('print');
}

// argument event
const input = element.querySelector('input');
input.onkeydown = function(event) {
  console.log(event.currentTarget.value); // Pega o valor digitado no input usando event
}

