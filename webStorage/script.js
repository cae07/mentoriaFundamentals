const button = document.querySelector("button");
const lista = document.querySelector("ul");
const input = document.querySelector("input");

button.addEventListener("click", () => {

  const exist = localStorage.getItem('lista');

  // console.log(exist);

  if (!exist) {
    localStorage.setItem('lista', []);
  }
  
  
  const inputValue = input.value;
  const li = document.createElement("li");
  li.innerText = inputValue;
  lista.appendChild(li);
  const getItem = JSON.parse(localStorage.getItem("lista"));
  console.log(getItem);

  // input.value = '';
});
