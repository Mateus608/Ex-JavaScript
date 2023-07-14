const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido?",
  "O que eu poderia fazer para melhorar?",
  "O que me deixou feliz hoje?",
  "Quantas pessoas ajudei hoje?",
]

const ask = ( index = 0 ) => {
  process.stdout.write("\n\n" + questions [index] + " > ");
} 

ask();

// Recebe o dado(data), converte pra string(toString) e remove os espaços vazios(trim) 
const answers = []
process.stdin.on("data", data => {
  answers.push(data.toString().trim())
  if(answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit() // Fecha o processo
  }
})

process.on('exit', () => {
  console.log(`
  Show!

  O que aprendi hoje foi:
  ${answers[0]}

  O que me deixou aborrecido foi:
  ${answers[1]}

  O que eu poderia fazer para melhorar:
  ${answers[2]}

  O que me deixou feliz hoje foi:
  ${answers[3]}

  Quantas pessoas ajudei hoje foi:
  ${answers[4]}

  Volte amanhã para novas reflexões!!!
  `)
})