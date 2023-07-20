const {
  nomes,
  supermercado,
  numerosAleatorios,
  estoque
} = require('./arrays');

// ordena o array

const nomesOrdenados = nomes.sort();
const comprasOrd = supermercado.sort();
const callBack = (a, b) => a - b;
const numerosOrd = numerosAleatorios.sort(callBack);
const estoqueOrd = estoque.sort(function (a, b) {
  if (a.price > b.price) {
    return 1;
  }
  if (a.price < b.price) {
    return -1;
  }
  // a must be equal to b
  return 0;
})
console.log(estoqueOrd);