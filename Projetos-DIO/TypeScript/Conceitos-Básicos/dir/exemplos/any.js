"use strict";
// Apenas um exemplo para mostrar a funcionalidade do 'any'.
// Vale ressaltar que é uma má prática utiliza-lo, então não utlize-o.
let valorAny;
valorAny = 3;
valorAny = 'ola';
valorAny = true;
let valorStrig1 = 'test';
valorStrig1 = valorAny;
let valorStrig2 = 'testao';
valorStrig2 = valorAny;
function somarStrings(string1, string2) {
    console.log(string1 + string2);
}
somarStrings(valorStrig1, valorStrig2);
somarStrings('Ola', ', como vai?');
