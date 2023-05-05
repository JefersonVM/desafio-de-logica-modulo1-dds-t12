

const precos = [100, 100, 100];

let itemMaisBarato = precos[0];  
let soma = 0;

for(let i = 0; i < precos.length; i++){
    
    if(itemMaisBarato > precos[i]){
        
        itemMaisBarato = precos[i];
    }
}

for(let preco of precos){
        
        soma += preco;            
        
    }

if(precos.length > 2){
    
   
}

if(precos.length > 2){
    
    console.log(soma - itemMaisBarato * 0.5);
    
}else {
    
    console.log(soma);
    
}