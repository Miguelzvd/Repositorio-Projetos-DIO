// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo')!;
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')! as HTMLBodyElement;

let saldo_total:number = 0 

limparSaldo();

function limparCampoSoma():void {
    soma.value = "";
}

function somarAoSaldo(soma:number) {
    saldo_total += soma;
    campoSaldo.innerHTML = saldo_total.toString();
    limparCampoSoma();
}

function limparSaldo():void {
    saldo_total = 0;
    campoSaldo.innerHTML = saldo_total.toString();
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
