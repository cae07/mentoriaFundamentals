function helloWorld() {
  return 'Hello World.';
};

console.log(helloWorld());

function greeting(name) {
  // return 'Boas vindas ' + name;
  console.log(`Boas vindas ${name}`);
}

// console.log(greeting('Caê'));
greeting('Paula');

function sum(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return 'Os valores precisam ser do tipo number.';
};

console.log(sum(10, 15));

// const number = 10;
// const array = []

// console.log(typeof (typeof array));

// const sumArrowFunction = (a, b) => {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return `O retorno de ${a} + ${b} = ${a + b}`;
//   }
//   return 'Os valores precisam ser do tipo number.';
// };

const sumArrowFunction = (a, b) => a + b;


console.log(sumArrowFunction(100, 15));

// const isOdds = (number) => number % 2 === 0;

// console.log(isOdds(10));

const isOdds = (number) =>
  number % 2 === 0 ? 'Este número é par' : 'Este número é impar';

console.log(isOdds(11));

const substArrayValue = (array, valueA, valueB) => {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === valueA) {
      result.push(valueB)
    } else {
      result.push(array[i]);

    }
  }
  return result;
}

const cars = ['volvo', 'mercedes', 'bmw', 'audi'];
const batata = cars;
cars.push('batata')

console.log(cars);
console.log(batata);


const test = substArrayValue(cars, 'bmw', 'chevrolet');
console.log('cars =>', cars);
console.log('result =>', test);
