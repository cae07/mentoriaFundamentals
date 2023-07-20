const {
  numerosAleatorios,
  nomes,
  colaboradores,
  boletin
} = require('./arrays');

// retorna um booleano se algum dos itens do array satisfizer a condição aplicada

const isIt = numerosAleatorios.some(numero => numero > 100);
const existeNome = nomes.some(nome => nome.toLowerCase().startsWith('ma'))
const existCol = colaboradores.some(colaborador => colaborador.age <= 17);


const reprovouEmAlguma = Object.values(boletin).some(nota => nota === 'reprovou');

// console.log(reprovouEmAlguma);