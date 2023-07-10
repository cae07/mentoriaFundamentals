const array = ['item1', 'item2', 'item3', 'item4'];

for (let index = 0; index < array.length; index += 1) {
  console.log('index => ', index);
  console.log(array[index]);
}

const numbers = [5, 6, 7, 12, 51, 61];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  // console.log('O indice é = ', index, 'e o result = ', result);
  result += numbers[index];
}

console.log(result);
