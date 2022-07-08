class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero; 
        this.tipo = tipo;
        this._saldo = 0; // Sempre que usar função get e set, deve colocar o "_". para que a função get e set tenha o nome saldo, e a propriedade não
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor
    }

    sacar(valor){
        if(this._saldo < valor){
            return console.log('Saldo inválido, operação negada!');
        }
        this._saldo = this._saldo - valor;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
    }
};

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'Conta Corrente';
        this.cartaoCredito_ = cartaoCredito;
    }
    get cartaoCredito(){
        return this.cartaoCredito_;
    }
    set cartaoCredito(valor){
        this.cartaoCredito_ = valor;
    }
};

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Conta Poupança ';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Conta Universitaria';
    }

    sacar(valor){
        if(valor > 500){
            return console.log('Operação negada!');
        }

        this._saldo = this._saldo - valor;

        return this._saldo;
    }
}




const conta1 = new ContaCorrente(1, 5555);

const conta2 = new ContaUniversitaria(1, 7777);

conta2.saldo = 1000;

conta2.depositar(6000);

conta2.sacar(700);

console.log(conta2.saldo);