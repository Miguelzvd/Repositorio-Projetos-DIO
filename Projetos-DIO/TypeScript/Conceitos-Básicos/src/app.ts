// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo')!;
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')! as HTMLBodyElement;

let saldo_total:number = 0 

limparSaldo();

function limparCampoSoma() {
    soma.value = "";
}

function somarAoSaldo(soma:number) {
    saldo_total += soma;
    campoSaldo.innerHTML = saldo_total.toString();
    limparCampoSoma();
}

function limparSaldo() {
    saldo_total = 0;
    campoSaldo.innerHTML = saldo_total.toString();
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */

// let botaoAtualizar = document.getElementById('atualizar-saldo');
// let botaoLimpar = document.getElementById('limpar-saldo')!;
// let soma = document.getElementById('soma')! as HTMLInputElement;
// let campoSaldo = document.getElementById('campo-saldo');

// let saldoTotal = 0

// limparSaldo()

// function somarAoSaldo(soma: number) {
//     if (campoSaldo) {
//         saldoTotal += soma
//         campoSaldo.innerHTML = saldoTotal.toString();
//         limparCampoSoma();
//     }
// }

// function limparCampoSoma() {
//     soma.value = "";
// }

// function limparSaldo() {
//     if (campoSaldo) {
//         saldoTotal = 0;
//         campoSaldo.innerHTML = saldoTotal.toString();
//     }
// }

// if (botaoAtualizar) {
//     botaoAtualizar.addEventListener('click', () => {
//         somarAoSaldo(Number(soma.value)); 
//     });
// }
// botaoLimpar.addEventListener('click', () => { // Percebam que aqui o typescript não acusou o botao de ser nulo e não precisei do if. Caso queiram fazer o teste, retirem a exclamação.
//     limparSaldo();
// });

// /**
//     <h4>Valor a ser adicionado: <input id="soma"> </h4>
//     <button id="atualizar-saldo">Atualizar saldo</button>
//     <button id="limpar-saldo">Limpar seu saldo</button>
//     <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
//  */
