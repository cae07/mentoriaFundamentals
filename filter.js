const {
  numerosAleatorios,
  nomes,
  supermercado,
  estoque
} = require('./arrays');

// filtrar TODOS os itens que satisfizerem a condição imposta e retorna em um novo array

const biggerThan = numerosAleatorios.filter(numero => numero > 55);
const startWithA = nomes.filter(nome => nome.toLowerCase().startsWith('a'))
const endsWithA = nomes.filter(nome => nome.toLowerCase().endsWith('la'))
const endsWithAo = supermercado.filter(produto => produto.endsWith('ão'))
const lowerStock = estoque.filter(item => item.quantity <= 50);
const test = estoque.map(item => ( {  ...item, quantity: item.quantity + 20 }))
  .filter(item => item.quantity <= 50);

console.log(test);
