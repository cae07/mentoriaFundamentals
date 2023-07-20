const {
  numerosAleatorios,
  estoque
} = require('./arrays');

const sum = numerosAleatorios
  .reduce((previousValue, currentValue, index, arrayOriginal) => {
    // console.log('previousValue =', previousValue);
    // console.log('currentValue =', currentValue);
    // console.log('index =', index);
    // console.log('arrayOriginal =', arrayOriginal);
    return previousValue + currentValue;
  }, 0);

const stockValue = estoque
  .reduce((acc, curr) =>
    acc + (curr.price * curr.quantity), 0)

console.log('stockValue => ', stockValue);