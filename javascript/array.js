// Lista de Compras (Array)
console.log([
  'Açucar',
  'Leite',
  'Alface'
])

const animals = [
  'Lion',
  'Monkey',
  {
    name:'Cat'
  }
]

// acessar valores dentro do array
console.log(animals[0]);
console.log(animals[2].name);

// Manipulando Array

let techs = ['html', 'css', 'js']

// adicionar um item no fim
techs.push('nodejs')
// adicionar no começo
techs.unshift('sql')
// remover do fim
techs.pop()
// remover do começo
techs.shift
// pegar somente alguns elementos do array
console.log(techs.slice(1,3))
// remover 1 ou mais itens em qualquer posição do array
techs.slice(1, 1)
// encontrar a posição de um elemento no array
let index = techs.indexOf('css')