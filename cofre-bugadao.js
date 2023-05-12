
const input = `cubos
cuggbyos`;

const array = input.trim().split("\n");
    
const senhaCorreta = array[0];
const senhaDigitada = array[1];

let indiceSenha = 0; 

for (let i = 0; i < senhaDigitada.length && indiceSenha < senhaCorreta.length; i++) {
  if (senhaDigitada[i] === senhaCorreta[indiceSenha]) {
  indiceSenha++;  
}
}
if (indiceSenha === senhaCorreta.length) {
console.log("SIM");  
} else {
console.log("NAO"); 
}