const getDiv = document.querySelector('div');
const getBody = document.querySelector("body");

// console.log(getDiv);
// const paragraph = document.createElement('p');
// paragraph.innerText = 'batatinha';
// paragraph.className = 'paragrafo';
// paragraph.style = 
//   'color: red; font-size: 50px; margin-left: 25px; background-color: green'

// getDiv.appendChild(paragraph);

const createStrong = document.createElement("strong");
createStrong.innerText = 'Este é meu span';
getDiv.appendChild(createStrong);
