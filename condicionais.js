
// 0 === false
// 1 === true

// const isOdds = 121 % 2 === 0;

// if (isOdds) {
  //   console.log('sim, este número é par.');
  // } else {
    //   console.log('não, este número não é par');
    // }
    
// definir a senioridade de um profissional pelo salário
// até 3000 => estagiario
// até 4500 => junior
// até 6000 => pleno
// acima de 6000 => senior

const estagiario = 3000;
const junior = 4500;
const pleno = 6000;
const senior = 6000;

const salario = 18000;

if (salario <= 3000) {
  console.log('Este profissional é estagiário.');
} else if (salario <= 4500) {
  console.log('Este profissional é junior ou sandy');
} else if (salario <= 6000) {
  console.log('Este profissional é pleno.');
} else {
  console.log('Este profissional é sênior.');
}
