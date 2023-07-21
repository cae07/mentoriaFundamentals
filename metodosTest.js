// crie uma função que dado 2 parametros(symbol, size)
// imprime no terminal uma piramide symbol de tamanho size

function piramide(symbol, size) {
  let resultado = symbol;
  const array = [];
  array.length = size;

  for (let i of array) {
    console.log(resultado);
    resultado += symbol
  }
}

piramide('*', 5);
// *
// **
// ***
// ****
// *****
// piramide("#", 3);
// #
// ##
// ###

//   *
//  **
// ***

//   *
//  ***
// ******