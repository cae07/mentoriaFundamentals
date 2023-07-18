// throw => disparar
// helper
const validateIsNum = (number) => {
  if (typeof number !== "number") {
    throw new Error('Os dois valores precisam ser numéricos.');
  }
};

const sum = (a, b) => {
  try {
    validateIsNum(a);
    validateIsNum(b);
  
    return a + b;

  } catch (e) {
    return e['message'];
  }
};

console.log(sum(1, '1'));
