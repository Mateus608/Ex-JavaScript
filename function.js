// function declaration
function createPhrases() {
  console.log('Estudar é muito bom')
  console.log('Paciência e persistência')
  console.log('Revisão é mãe do aprendizado')
}

// executar a função
createPhrases()

// function expression or anonymous
// parâmetros(parameters)
const sum = function(number1, number2){
 console.log(number1 + number2)
}

sum(2, 3) // arguments - argumentos

const soma = function(number1, number2){
  let total = number1 + number2
  return total
}

let number1 = 34
let number2 = 25

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${soma(number1, number2)}`)

// arrow function
const sayMyName = (name) => {
  console.log(name)
}

sayMyName('Mateus')

// callback(chamar de volta) function
function MyName(name) {
  console.log(name)
} 

MyName(
  () => {
    console.log('estou em uma callback')
  }
)

/* function constructor
    * expressão new
    * criar um novo objeto
    * this keyword
*/
function Person(name) {
  this.name = name
}
const Mateus = new Person('Mateus')
const Joao = new Person('João')
console.log(Mateus)
console.log(Joao)

function Andar(name) {
  this.name = name
  this.walk = function() {
    return this.name + ' está andando'
  }
}

const mateus = new Andar('Mateus')
const joao = new Andar('João')
console.log(mateus.walk())
console.log(joao.walk())

let date = new Date('2023-12-01')
console.log(date)

let name = new String('Mateus')
console.log(name)