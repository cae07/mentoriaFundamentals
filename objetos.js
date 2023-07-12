const car = {
  marca: 'audi',
  modelo: 'A4',
  ano: '2023',
  valor: 200.000,
  cor: 'Vinho',
}

// dotNotation
const marcaCarro = car.marca;

console.log(`A marca do carro com dotNotation é ${marcaCarro}`);
// bracketNotation
const marcaBracketNotation = car['marca'];
console.log(`A marca do carro com bracket notation é ${marcaBracketNotation}`);

const numbersIndex = {
  10: 'batata',
  20: 'pera'
}

console.log(numbersIndex[10]);
