
const input = `cubos
cuggbyos`;

const array = input.trim().split("\n");
    
const senhaCorreta = array[0];
const senhaDigitada = array[1];

let indiceSenha = 0; 

for (let j = 0; j < senhaDigitada.length && indiceSenha < senhaCorreta.length; j++) {
  if (senhaDigitada[j] === senhaCorreta[indiceSenha]) {
  indiceSenha++;  
}
}
if (indiceSenha === senhaCorreta.length) {
console.log("SIM");  
} else {
console.log("NAO"); 
}