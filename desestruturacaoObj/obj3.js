const user = {
  name: 'Paulo',
  age: 27,
  phones: {
    mobile: 'xx79878-8795',
    home: ''
  },
  hobbies: ['Jogar war', 'Jogar play4', 'andar bike'],
  kids: {
    firstKid: {
      name: 'Amanda',
      age: 11,
      phones: {
        mobile: 'xx79878-8795',
        home: ''
      }
    },
    secondKid: {
      name: 'Pedro',
      age: 9,
      phones: {
        mobile: 'xx79879-8793',
        home: ''
      }
    }
  }
}

const {
  hobbies,
  kids: {
    firstKid
  }
} = user;

console.log(firstKid.phones.mobile);