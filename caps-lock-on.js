

const input = `cAPS`;

if(input.substr(0, 1) === input.substr(0, 1).toLowerCase() && input.substr(1) === input.substr(1).toUpperCase()){
        
    console.log(`${input.substr(0, 1).toUpperCase()}${input.substr(1).toLowerCase()}`);
    
}else if(input === input.toUpperCase()){
    
    console.log(input.toLowerCase());
    
}else{
    
    console.log(input);
} 