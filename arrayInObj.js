const user = {
  nome: 'Camilla',
  hobbies: ['Ouvir música', 'Jogar videogame', 'Ler']
};

const firstUserHobbie = user.hobbies[0];

// console.log(firstUserHobbie);

const readUserHobbies = (user) => {
  const userHobbies = user.hobbies;
  for (let i = 0; i < userHobbies.length; i += 1) {
    console.log(userHobbies[i]);
  }
}

readUserHobbies(user);