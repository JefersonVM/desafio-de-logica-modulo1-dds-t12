
const jogadores = [{
    "nome": "Herman",
    "jogada": 1
  },
  {
    "nome": "Rhodes",
    "jogada": 0
  },
  {
    "nome": "Beach",
    "jogada": 0
  },
  {
    "nome": "Laurel",
    "jogada": 0
  },
  {
    "nome": "Beatrice",
    "jogada": 0
  },
  {
    "nome": "Alison",
    "jogada": 0
  },
  {
    "nome": "Saundra",
    "jogada": 0
  },
  {
    "nome": "Klein",
    "jogada": 0
  }];


let zero = [];
let um = [];
let numSorteado;
let nomeJogador;


for(let i = 0; i < jogadores.length; i++){
  
 if(jogadores[i].jogada === 0){
     zero += jogadores[i].jogada;
 }else if (jogadores[i].jogada === 1){
     um += jogadores[i].jogada
 }
}

if(zero.length === 1 && um.length > 1){
    
    numSorteado = 0;
    
}else if (um.length === 1 && zero.length > 1){
    
    numSorteado = 1        
    
}else {
    
    console.log(`NINGUEM`);        
    
}

for(let i = 0; i < jogadores.length; i++){
    
    if(jogadores[i].jogada === numSorteado){
        
        nomeJogador = jogadores[i].nome            
        
    }        
    
}

if(numSorteado === 0 || numSorteado === 1){

  console.log(nomeJogador);

} 