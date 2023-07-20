const {
  numerosAleatorios,
  nomes,
  estoque,
  boletin
} = require('./arrays');

// every => booleano true se TODOS os itens do array passarem na condição

const todosExistem = numerosAleatorios
  .every(numero => numero <= 92);

const todosSao = nomes.every(nome => nome.length > 5)
// console.log(todosSao);

const precoMinimo = estoque
.every(item => item['price'] <= 10 && item.price > 1);

console.log(precoMinimo);