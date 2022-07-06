let button = document.getElementById('button');
let input1 = document.getElementById('1');
let input2 = document.getElementById('2');

function adicionarNumero(numero1: number, numero2: number){
    return numero1 + numero2
}


button.addEventListener('click', adicionarNumero()) HTMLElement