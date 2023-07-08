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
 