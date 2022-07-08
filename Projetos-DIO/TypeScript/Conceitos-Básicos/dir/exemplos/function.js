"use strict";
function somaValoresNumericos(numero1, numero2) {
    //                                                                      retorno da função, cujo nesse caso ela deve ter um retornar um 
    //                                                                      valor númerico, então ela vai garantir que tenha um retorono númerico.
    //                                                                      Caso o retorno não seja o esperado, então irá estourar um erro.
    return numero1 + numero2;
}
console.log(somaValoresNumericos(1, 3));
function printValoresNumericos(numero1, numero2) {
    //                                                              É utilizado para especificar que a função não irá
    //                                                              retornar valor ou qualquer coisa.
    console.log(numero1 + numero2);
}
function somaValoresNumericos2(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somaValoresNumericos2(1, 3, aoQuadrado));
console.log(somaValoresNumericos2(1, 3, dividirPorEleMesmo));
