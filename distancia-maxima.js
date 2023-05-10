
const input = `3
0 0
0 3
4 0`;

// const input = `5
// 3.56 17
// -5.1 36.3
// 0.0002 -2
// 5 5
// -9.01 -17.7`;



let resultado = input.trim().split("\n");
      
    let n = parseInt(resultado[0]);
    
    const posicoes = [];    
    
    let distancia;
    
    let maiorDist = 0;
    
    for(let i = 1; i < resultado.length; i++){
        
        const posicao = resultado[i].split(" ");
        
        posicoes.push({
            
            x: parseFloat(posicao[0]),
            
            y: parseFloat(posicao[1])
            
        });       
                
    }         

    for (let i = 0; i < n; i++) {
        
        for (let j = i; j < n; j++) {
            
            distancia = Math.sqrt((posicoes[j].x - posicoes[i].x) ** 2 + (posicoes[j].y - posicoes[i].y) ** 2);
            
             if(distancia > maiorDist){
                 
                 maiorDist = distancia
                 
             }else {
                 
                 maiorDist = maiorDist
             }
            
        }
        
    }
    
    console.log(maiorDist);