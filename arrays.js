const tabuada = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosAleatorios = [22, 17, 6, 91, 37, 55, 27, 4, 92];
const nomes = ['Paula', 'Júnior', 'Pedro', 'Alessandra', 'Maria', 'Felipe'];
const supermercado = ['feijão', 'macarrão', 'arroz', 'alho', 'café', 'queijo'];
const colaboradores = [
  { id: 0, name: 'Carol', age: 26, state: 'SP', position: 'junior' },
  { id: 1, name: 'Adriana', age: 22, state: 'SC', position: 'junior' },
  { id: 2, name: 'Fabiana', age: 30, state: 'SC', position: 'pleno' },
  { id: 3, name: 'Andressa', age: 32, state: 'SP', position: 'pleno' },
  { id: 4, name: 'Júlia', age: 27, state: 'SP', position: 'junior' },
  { id: 5, name: 'Amanda', age: 28, state: 'RJ', position: 'Sênior' },
];
const estoque = [
  { product: 'salgadinho', price: 3.5, quantity: 47 },
  { product: 'salgados', price: 6.5, quantity: 16 },
  { product: 'chicletes', price: 1, quantity: 121 },
  { product: 'balas', price: 0.25, quantity: 216 },
  { product: 'agua de coco', price: 6, quantity: 19 },
  { product: 'guaraná', price: 3.5, quantity: 35 },
  { product: 'cerveja', price: 3, quantity: 97 },
];
const nomeCompleto = [
  { firstName: 'Bellatrix', lastName: 'Lestrange' },
  { firstName: 'Severus', lastName: 'Snape' },
  { firstName: 'Vicent', lastName: 'Crabble' },
  { firstName: 'Argus', lastName: 'Filch' },
]

const boletin = {
  matematica: 'passou',
  ciencias: 'passou',
  portugues: 'passou',
  fisica: 'passou',
  geografia: 'passou',
  historia: 'passou',
  ingles: 'passou',
  quimica: 'reprovou',
  biologia: 'passou',
  artes: 'passou'
};

module.exports = {
  boletin,
  colaboradores,
  estoque,
  nomes,
  numerosAleatorios,
  supermercado,
  tabuada,
  nomeCompleto
}
