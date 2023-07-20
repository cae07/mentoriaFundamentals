const {
  numerosAleatorios,
  nomes,
  colaboradores
} = require('./arrays');

// find retorna o primeiro elemento que encontrar com o filtro estipulado

const test = numerosAleatorios.find(numero => numero >= 42);
const nome = nomes.find(nome => nome.endsWith('ra'));
const seniorColaborador = colaboradores
  .find(colaborador => colaborador.position.toLowerCase() === 'sênior');

console.log(seniorColaborador);
