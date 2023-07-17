// spread => espalhar/ esparramar
// const fruits = ['banana', 'maçã', 'abacaxi'];
// const newFruit = 'laranja';

// console.log(...fruits);

// const newFruits = [...fruits, newFruit, 'maçã'];

// console.log('fruits => ', fruits);
// console.log('newFruit => ', newFruits);

// const user = {
//   name: 'Carlos',
//   age: 42
// };

// user['lastName'] = 'silva'
// user.lastName = 'silva'

// const newUser = { ...user, lastName: 'silva', age: 45 };
// console.log(user);
// console.log(newUser);

// parâmetro rest => resto

// const paramCounter = (...args) => console.log(args);

// console.log(paramCounter('batata', null, ['batata'], {}, 123));

const sum = (...numbers) => 
  numbers.reduce((prev, curr)=> prev + curr, 0);

console.log(sum(1, 5, 8, 7, 3, 7, 12, 8 ,50));
