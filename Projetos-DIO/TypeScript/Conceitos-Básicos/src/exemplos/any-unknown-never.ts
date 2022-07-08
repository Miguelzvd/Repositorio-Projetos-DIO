let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'test'

let stringTest: string = 'verificar'
stringTest = anyEstaDeVolta;

let unkownValor: unknown; // setando o tipo da variavel como tipo unkown.
unkownValor = 3;
unkownValor = 'opa';
unkownValor = true;
unkownValor = 'agora vai' // ultimo tipo de valor passado foi uma string

let stringTest2: string = 'agora vai';
//stringTest2 = unkownValor; // seu tipo é desconhecido(unknown) e por isso não pode ser atribuida aqui já que o tipo de stringTest2 é conhecido e é do tipo string.

if (typeof unkownValor === 'string'){ // passando pela verificação (ingnora se é unkown) se o tipo é string e  tem a operação bem sucedida. Ele passa pela verificação já que seu valor real é uma string.
    stringTest2 = unkownValor
}

function jogaErro(erro: string, codigo: number): never { // Esta definição para função serve para funções que nunca é finalizada, ou sejo, nunca retorna nada.
    throw {error: erro, code: codigo}
    //return; veja o erro, já que função nunca foi finalizada
}

jogaErro('deu erro', 500)