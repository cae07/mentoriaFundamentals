const ficouComplicado = {
  empresa: 'marisa',
  lojista: {
    nome: 'Pereira negocios LTDA',
    cidade: 'São Paulo'
  }
};

const cidadeDaLoja = ficouComplicado.lojista.cidade
const test = ficouComplicado['lojista']['cidade']

console.log('cidadeDaLoja =', cidadeDaLoja);
console.log('test =', test);

const ficouMaisComplicadoAinda = {
  nome: 'Paula Azevedo',
  endereco: {
    rua: 'das batatas',
    cidade: 'São Paulo',
  },
  carro: {
    marca: 'audi',
    enderecoDaLoja: {
      rua: 'das flores',
      bairro: 'cerqueira cezar'
    }
  }
}

const ruaDaLoja = ficouMaisComplicadoAinda.carro.enderecoDaLoja.rua;
const enderecoDaPaula = ficouMaisComplicadoAinda.endereco;

console.log(ruaDaLoja);
console.log(enderecoDaPaula);


