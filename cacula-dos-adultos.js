
const lista = [12, 18, 27];

let maiorDeIdade = [];
    
    
for(let idade of lista){

    if(idade >= 18){

        maiorDeIdade.push(idade);
    }
}  

let menorIdade = maiorDeIdade[0];
   
for(let i = 0; i < maiorDeIdade.length; i++){

    if(menorIdade > maiorDeIdade[i]){

        menorIdade = maiorDeIdade[i];
    }
} 

if(maiorDeIdade.length > 0){

    console.log(menorIdade);

}else {

    console.log(`CRESCA E APARECA`);
}