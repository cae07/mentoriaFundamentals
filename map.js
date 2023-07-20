const {
  tabuada,
  numerosAleatorios,
  nomeCompleto,
  colaboradores,
  estoque
} = require('./arrays');

// mapear o array passado e retornar um novo array com a alteração imposta

const tabuada2 = tabuada.map(numero => numero * 2);
const dividedBy2 = numerosAleatorios.map(numero => numero / 2);
const fullName = nomeCompleto.map(user => `${user.firstName} ${user.lastName}`)
const changeBirth = colaboradores
  .map(colaborador => ({ ...colaborador, age: colaborador.age + 1 }))

const inflacao = estoque.map(item => {
  return {
    ...item, price: (item.price * 1.1).toFixed(2)
  }
});

// console.log(nomeCompleto);
console.log(inflacao);