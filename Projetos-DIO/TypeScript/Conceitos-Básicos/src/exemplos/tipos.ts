type input = number | string; // Cria um tipo personalizado. Nesse caso quero que o input seja ou numero ou string.

function somaValores(input1: input | string, input2: input | string){ // possibilita que a variavel inserida aqui possa ser ou um numero ou uma string.
    if(typeof input1 === 'string' || typeof input2 === 'string'){
        return input1.toString() + input2.toString();
    }
    else{
        return input1 + input2;
    }
}


console.log(somaValores(1, 5));
console.log(somaValores('ola', ', tudo bem?'));
console.log(somaValores('que dia é hoje? ', 5));
