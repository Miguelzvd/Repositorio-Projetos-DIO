// Apenas um exemplo para mostrar a funcionalidade do 'any'.
// Vale ressaltar que é uma má prática utiliza-lo, então não utlize-o.

let valorAny: any;
valorAny = 3;
valorAny = 'ola';
valorAny = true;

let valorStrig1: string = 'test'
valorStrig1 = valorAny;
let valorStrig2: string = 'testao'
valorStrig2 = valorAny;

function somarStrings(string1: string, string2: string){
    console.log(string1 + string2)
}

somarStrings(valorStrig1, valorStrig2);
somarStrings('Ola', ', como vai?')