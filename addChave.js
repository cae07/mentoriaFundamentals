const user = {
  nome: 'Jéssica',
  idade: 21,
  cidade: 'Palmas'
};

// adicionar uma chave 'sobrenome' com valor 'Santos'
user.sobrenome = 'Santos';
user['estado'] = 'Tocantins'
user['idade'] = 22;

user.carro = {
  nome: 'audi',
  modelo: 'A4'
}


user.carro.revendedora = {
  nome: 'lojas batata',
  rua: 'das palmeiras',
}
console.log(user);

const revendedoraDoCarroDaJessica = user.carro['revendedora']

console.log('revendedoraDoCarroDaJessica = ', revendedoraDoCarroDaJessica);