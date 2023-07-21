// array desestructuring
const users = ['Amanda', 'Adriana', 'Simone'];
const [batata, item2, item3] = users;


// default desestructuring
const user = {
  age: 20
}

const { nome = 'batatão', age = 40 } = user;

// object property shorthand
const firstName = 'Caê';
const lastName = 'Calçolari';
const state = 'SC';

const user2 = {
  firstName,
  lastName,
  state
}

// console.log(user2['firstName'])

// default params

function greetings(name = 'Caê') {
  return `Hello ${name}.`;
}

console.log(greetings('Fabiola'));

