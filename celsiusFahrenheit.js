function converterTemperatura(temperatura) {
  const celsius = temperatura.toUpperCase().includes('C');
  const fahrehenheit = temperatura.toUpperCase().includes('F');
  
  // fluxo de erro
  if (!celsius && !fahrehenheit) {
    throw new Error('Grau não identificado');
  }

  // fluxo ideal, F => C
  let updatedTemperatura = Number(temperatura.toUpperCase().replace('F', ''));
  let formula = fahrehenheit => (fahrehenheit - 32) * 5/9;
  let sinalTemperatura = 'C';

  // fluxo alternativo C => F
  if (celsius) {
    updatedTemperatura = Number(temperatura.toUpperCase().replace('C', ''));
    formula = celsius => celsius * 9/5 + 32;
    sinalTemperatura = 'F';
  }

  return formula(updatedTemperatura) + sinalTemperatura;
}

try {
  console.log(converterTemperatura('50F'));
  console.log(converterTemperatura('10C'));
  converterTemperatura('50Z');
} catch (error) {
  console.log(error.message);
}