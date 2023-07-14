const cliqP = document.getElementById('paragrafo-clicavel');
const button = document.querySelector('button');
const pRecuperado = document.getElementById('paragrafo-resgate');
const input = document.querySelector("#label-test");
const lista = document.querySelector("ul");

// addEventListener(tipoEvento, função);

const handleClick = (eventoDeAgora) => {
  console.log('estou funcionando ainda');
  console.log(eventoDeAgora.target.innerText);
};

const handleLi = (event) => {
  const eventoAtual = event.target;
  // lista.removeChild(eventoAtual);
  eventoAtual.style = 'text-decoration: line-through;'
}

// const handleChange = (batatinha) => {
//   console.log(batatinha.target.value);
// };

const handleButton = () => {
  const createLi = document.createElement("li");
  createLi.innerText = input.value;
  lista.appendChild(createLi);
  createLi.addEventListener("click", handleLi);
  input.value = '';
}

cliqP.addEventListener('click', handleClick);
// input.addEventListener('change', handleChange);
button.addEventListener('click', handleButton);

// cliqP.addEventListener('click', (event) => {
//   console.log('estou funcionando ainda');
//   console.log(event.target.innerText);
// });

// input.addEventListener('change', (e) => {
//   console.log(e.target.value);
// })