function somaValoresNumericos(numero1: number, numero2:number): number { // Esse 'number' que esta no final da linha serve para definir o 
    //                                                                      retorno da função, cujo nesse caso ela deve ter um retornar um 
    //                                                                      valor númerico, então ela vai garantir que tenha um retorono númerico.
    //                                                                      Caso o retorno não seja o esperado, então irá estourar um erro.
    return numero1 + numero2;
}
console.log(somaValoresNumericos(1, 3));

function printValoresNumericos(numero1: number, numero2:number){ // void define como a ausencia do retorono da função.
    //                                                              É utilizado para especificar que a função não irá
    //                                                              retornar valor ou qualquer coisa.
    console.log(numero1 + numero2);
}

function somaValoresNumericos2(numero1: number, numero2:number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number): number{
    return numero * numero;
}

function dividirPorEleMesmo(numero: number): number{
    return numero / numero;
}

console.log(somaValoresNumericos2(1, 3, aoQuadrado))
console.log(somaValoresNumericos2(1, 3, dividirPorEleMesmo))