function comparar(num1, num2){

    const soma = Number(num1) + Number(num2);

    let resultado10 = "menor";
    let resultado20 = "menor";

    const comparacao10 = soma > 10;
    const comparacao20 = soma > 20;

    if(comparacao10){
        resultado10 = "maior";
    }

    if(comparacao20){
        resultado20 = "maior";
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

function igualdade(a, b){
    let conf_igualdade = "";

    if(a !== b){
        conf_igualdade = " não";
    }

    return `Os números ${a} e ${b}${conf_igualdade} são iguais.`;
}

function comparacao(a, b){

    let primeira_frase = igualdade(a, b);
    let segunda_frase = comparar(a, b);

    console.log(`${primeira_frase} ${segunda_frase}`);
}


comparacao(10, '9');