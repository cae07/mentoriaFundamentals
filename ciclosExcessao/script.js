// resgatar os elementos
const firstInput = document.querySelector("#input-name");
const secondInput = document.querySelector("#input-number");
const button = document.querySelector("button");
const firstText = document.querySelector("#first-text");
const secondText = document.querySelector("#second-text");

// obj de requisição da nossa api

const allFortunes = [
  { fortune: 'Sorte é estar pronto quando a oportunidade vem.' },
  { fortune: 'Sorte na vida é sentir a felicidade de viver cada momento.' },
  { fortune: 'Sorte é reconhecer as boas oportunidades e saber aproveitá-las.' },
  { fortune: 'Nós fazemos nossa própria sorte' },
  { fortune: 'Nunca falhe, nem tente.' },
  { fortune: 'A sorte são pontos de vista.' },
  { fortune: 'Viva um dia de cada vez.' },
  { fortune: 'lembre-se dos baby-steps.' },
  { fortune: 'Busque a sua fortuna.' },
  { fortune: 'Louco é ser normal no mundo dos loucos.' },
];

// funções
const validateName = (name) => {
  for (let letter of name) {
    if (!isNaN(letter)) {
      throw new Error('Por favor digite um nome válido.');
    }
  }
}

const validateIsNumber = (number) => {
  console.log(number);
  if (typeof number !== "number") {
    throw new Error('Por favor digite um número válido.');
  }
}

const validateExistFortune = (number) => {
  const maxLength = number <= allFortunes.length && number > 0;

  if (!maxLength) {
    throw new Error(`Por favor digite um numero entre 1 e ${allFortunes.length}`);
  }
}

const generateDaysFortune = () => {
  firstText.innerText = '';
  secondText.innerText = '';

  try {
    const name = firstInput.value;
    validateName(name);
    const number = Number(secondInput.value);
    validateIsNumber(number);
    validateExistFortune(number);
  
    firstText.innerText = `Olá ${name}. A sua sorte do dia é:`
    secondText.innerText = allFortunes[number - 1].fortune;
    
  } catch (error) {
    // alert(error.message)
    firstText.innerText = error.message;
  } finally {
    firstInput.value = '';
    secondInput.value = '';
  }
}

// escutadores de eventos

button.addEventListener('click', generateDaysFortune);
