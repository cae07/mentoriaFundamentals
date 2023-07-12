const users = [
  { name: 'José', idade: 67 },
  { name: 'Paulo', idade: 16 },
  { name: 'Joana', idade: 12 },
  { name: 'Joaquina', idade: 50 },
  { name: 'Marcelly', idade: 18 },
  { name: 'João', idade: 89 },
  { name: 'Ana', idade: 23 },
  { name: 'Carlos', idade: 42 },
];

// for (let user of users) {
//   console.log(user.name);
// };

// criar um método que traz usuarios de acordo com a idade determinada

const getUserByAge = (startAge, endAge) => {
  const response = [];

  for (let user of users) {
    if (user.idade >= startAge && user.idade <= endAge) {
      response.push(user)
    }
  }

  return response;
}

const getUserByAgeWithMap = users.map(user => {
  if (user.idade >= 10 && user.idade <= 25) {
    return user;
  }
});

console.log('getUserByAgeWithMap', getUserByAgeWithMap);

// console.log(getUserByAge(10, 25));