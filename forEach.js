const {
  tabuada,
  nomes,
  supermercado
} = require('./arrays');


// forEach retorna undefined
// array.forEach((item, index, arrayOriginal) => {
//   codigo aqui
// })

// tabuada.forEach(numero => {
//   console.log('numero = ', numero);
// });

// nomes.forEach(name => console.log(`Olá ${name}. Aproxime-se para a aula.`))

supermercado.forEach(item => {
  if (item.startsWith('arr')) {
    console.log(`O ${item} começa com a sílaba "arr"`);
  }
});

supermercado.forEach(item => {
  if (item.endsWith('ão')) {
    console.log(`O ${item} finaliza com a sílaba "ão"`);
  }
});
