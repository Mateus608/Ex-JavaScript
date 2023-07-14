console.log({
  name: 'Mateus',
  idade: 18,
  andar: function () {
    console.log('andar')
  }
})

const person = {
  name: Mateus,
  age: 18,
  weight: 88.6,
  isAdmin: true
}

// pegar o valor de propriedades dentro do objeto
console.log(`${person.name} tem ${person.age} anos`);