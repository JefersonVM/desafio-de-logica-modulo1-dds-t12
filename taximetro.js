
const min = 25;
const km = 11.5;

let precoKm = 0;
let precoTempo = 0;
let valorFinal = 0;

    if (min > 20) {
    
        precoTempo = 20 * 50 + (min - 20) * 30;
    
    } else {
    
        precoTempo = min * 50;
    }

    if (km > 10) {
    
        precoKm = 10 * 70 + (km - 10) * 50;
    
    } else {
    
        precoKm = km * 70;
    
    }
    
    valorFinal = precoKm + precoTempo;

    

     console.log(`Valor total a pagar: R$ ${valorFinal / 100}`);