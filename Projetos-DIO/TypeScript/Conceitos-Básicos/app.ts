export {} // Para não reclamar de variáveis duplicadas

let campoSaldo = document.getElementById('campo-saldo')
let botaoAtualizar = document.getElementById('atualizar-saldo')!
let botaoLimpar = document.getElementById('limpar-saldo')!
let soma = document.getElementById('soma')!


}
function somarAoSaldo(soma: number) {
    
    campoSaldo.innerHTML += soma;
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
