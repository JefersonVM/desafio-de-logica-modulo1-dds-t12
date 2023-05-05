
const min = 2;
const max = 10;
const valores = [0, 5, 6, 10, 11];


let valoresAutorizados = [];
    
for (let valor of valores){
    
    if(valor >= min && valor <= max){
        
        valoresAutorizados.push(valor);
        
    }
    
}

console.log(valoresAutorizados);