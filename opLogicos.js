const food = 'lasanha';
const drink = 'limonada';
const coofe = 'café';
const tea = 'chá de camomila';

const isLunch = food === 'lasanha' && drink === 'limonada';
const isBreak = coofe === 'café' || tea === 'chá de cidreira';

// console.log('is lunch? ', isLunch);
// console.log('is Break? ', isBreak);

// const test = (2 + 3) * 5;

// console.log(test);

if (food === 'lasanha' || drink === 'café') {
  console.log('Hora de comer.');
} else {
  console.log('Ainda não é hora de comer.');
}

const isUndefined = null;

if (isUndefined === null || isUndefined === undefined || isUndefined.length === 0) {
  console.log('é indefinido');
} else {
  console.log('não é indefinido');
}


// console.log(array);

if (!isUndefined) {
  console.log('é indefinido');
} else {
  console.log('não é indefinido');
}

const array = ['batata']

if (!array.length) {
  console.log('Array vazio');
} else {
  console.log('Existe alguma coisa ai');
}