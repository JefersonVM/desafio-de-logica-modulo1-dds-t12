
const texto = `Um texto qualquer`

const textoFormatado = texto.trim().split(/\s+/);
    
let quantDePalavras = 0;

for(let palavra of textoFormatado){
    
    quantDePalavras += 1;
}

if(texto.trim() === ""){
    quantDePalavras = 0;
}        

console.log(quantDePalavras);