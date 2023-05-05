
const numeros = [1, 3, 2, 1];

let somaNumero = 0;


for (let numero of numeros){

    somaNumero += numero;

}

let posicao = 0;

for(let i = 1; i <= somaNumero; i++ ){

    posicao++;

    if (posicao > numeros.length){            
        posicao = 1;            
    }    

}

console.log(posicao);