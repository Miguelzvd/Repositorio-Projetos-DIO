"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldo_total = 0;
limparSaldo();
function limparCampoSoma() {
    soma.value = "";
}
function somarAoSaldo(soma) {
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
