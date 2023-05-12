

const input = `cAPS`;

if(input.substring(0, 1) === input.substring(0, 1).toLowerCase() && input.substring(1) === input.substring(1).toUpperCase()){
        
    console.log(`${input.substring(0, 1).toUpperCase()}${input.substring(1).toLowerCase()}`);
    
}else if(input === input.toUpperCase()){
    
    console.log(input.toLowerCase());
    
}else{
    
    console.log(input);
} 