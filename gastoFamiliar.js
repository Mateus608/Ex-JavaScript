// Objeto
let familia = {
  receitas: [2500, 3200, 250.43, 360.45],
  despesas: [320.34, 128.45, 176.87, 1450.00]
}

function soma(array) {
  let total = 0;

  for (let valor of array) {
    total += valor;
  }

  return total;
}

function calcularSaldo () {
  const calcularReceitas = soma(familia.receitas);
  const calcularDespesas = soma(familia.despesas);

  const total = calcularReceitas - calcularDespesas;

  let saldoText = 'Negativo';

  if (total >= 0) {
    saldoText = 'Positivo'
  }

  console.log(`Seu saldo é ${saldoText}: R$ ${total.toFixed(2)}`)
}

calcularSaldo()
