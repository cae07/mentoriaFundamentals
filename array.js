const array = [true, 5, 'batata', 'delorean'];

// console.log(array.length);

const firstItem = array[0];
const secondItem = array[1];
const thirdItem = array[3];

// console.log('firstItem = ', firstItem);
// console.log('secondItem = ', secondItem);
// console.log('thirdItem = ', thirdItem);

array[0] = 'mudei';

array[array.length] = 'outra coisa';

array.push('mais uma coisa') // push() adiciona algo no final do array

array.unshift('primeiro item') // unshift() adiciona algo na primeira posição do array

const firstItemAgain = array.shift(); // retira o primeiro item do array;
console.log('firstItemAgain = ', firstItemAgain);

const lastItemRemoved = array.pop(); // Retira o ultimo item do array

console.log('lastItemRemoved =', lastItemRemoved);
console.log(array);