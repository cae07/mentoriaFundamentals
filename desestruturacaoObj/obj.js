const user = {
  firstName: 'Paula',
  age: 42,
  lastName: 'Santos',
  phones: { mobile: '1198876-0112', home: '' }
};

const { firstName: primeiroNome, age: idade } = user;

console.log(idade);
console.log(`A pessoa usuária de nome ${primeiroNome} tem ${idade} anos`);
