/*
Utilizando apenas if...else

let nota = 101;

if (nota >= 90 && nota <= 100) {
  console.log('A');
} else if (nota >= 80 && nota <= 89) {
  console.log('B');
} else if (nota >= 70 && nota <= 79) {
  console.log('C');
} else if (nota >= 60 && nota <= 69) {
  console.log('D');
} else if (nota <= 60 && nota >= 0) {
  console.log('F');
} else {
  console.log('Inválido');
}
*/

// Utilizando função
function getNota (nota) {

  let notaFinal;

  if (nota >= 90 && nota <= 100) {
    notaFinal = 'A';
  } else if (nota >= 80 && nota <= 89) {
    notaFinal = 'B';
  } else if (nota >= 70 && nota <= 79) {
    notaFinal = 'C';
  } else if (nota >= 60 && nota <= 69) {
    notaFinal = 'D';
  } else if (nota <= 60 && nota >= 0) {
    notaFinal = 'F';
  } else {
    notaFinal = 'Inválido';
  }

  return notaFinal;
}

console.log(getNota(80));