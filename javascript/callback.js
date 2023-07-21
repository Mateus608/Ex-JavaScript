// Funções aceitam qualquer tipo de dado como argumento

function imprimirDado(dado) {
  console.log(dado)
}

imprimirDado(1);
imprimirDado('texto');
imprimirDado(true);
imprimirDado({nome: 'João'});
imprimirDado([1, 2, 3]);

// Uma função pode chamar outra função
function imprimirDado(dado) {
  console.log(dado())
}

imprimirDado(function () {
  return 'Olá mundo!'
})