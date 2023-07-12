const user = {
  name: 'Paulo',
  idade: 60,
  altura: 1.73,
  endereco: {
    rua: 'das batatas',
    numero: 57,
  }
}

const justNames = Object.keys(user);
const justValues = Object.values(user);
const allEntries = Object.entries(user);

console.log(allEntries);