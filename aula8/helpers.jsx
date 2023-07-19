const allFortunes = require('./mocks');

const validateName = (name) => {
  if (typeof name !== 'string') {
    throw new Error('Por favor digite um nome válido.');
  }
  for (let letter of name) {
    if (!isNaN(letter)) {
      throw new Error('Por favor digite um nome válido.');
    }
  }
  return true;
}

const validateIsNumber = (number) => {
  console.log(number);
  if (typeof number !== "number") {
    throw new Error('Por favor digite um número válido.');
  }
  return true;
}

const validateExistFortune = (number) => {
  const maxLength = number <= allFortunes.length && number > 0;

  if (!maxLength) {
    throw new Error(`Por favor digite um numero entre 1 e ${allFortunes.length}`);
  }
  return true;
}

module.exports = {
  validateName, validateIsNumber, validateExistFortune
}
