// função que recebe um objeto e recebe um novo valor para adicionar nesse obj e retorna o obj refatorado;
// factory
// spread

const car = {
  model: 'uno',
  fabric: 'fiat'
}

const year90 = {
  year: 1990
}

// const objectCreator = (obj, newItem) => {
//   const newObj = { ...obj, ...newItem };
//   return newObj;
// };

// const objectCreator = (obj, newItem) => {
//   const { year } = newItem;
//   const newObj = { ...obj, idade: year };
//   return newObj;
// };

const objectCreator = (obj, newItem) => {
  return { ...obj, ...newItem }
}

console.log(objectCreator(car, year90));
