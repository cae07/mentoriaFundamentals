const hobbies = ['Ouvir música', 'Jogar videogame', 'Ler'];

for (let index in hobbies) {
  console.log('index =', index);
}

for (let item of hobbies) {
  console.log('item =', item);
}

const string = 'bAtaTinha';
let newString = '';
for (let letter of string) {
  if (letter === 'b') {
    newString += 'B'
  } else {
    
    newString += letter
  }
  
}

console.log(string.toLowerCase());

const user = {
  name: 'Paula',
  idade: 36
}

for (let key in user) {
  if (key === 'name') {
    console.log(user[key]);
  }
}