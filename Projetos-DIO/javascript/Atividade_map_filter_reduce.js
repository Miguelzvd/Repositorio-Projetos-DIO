// Atividade 1: MAP

// Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.

// com usar o this:

const miguel = {
    idade: 22,
};

const heloize = {
    idade: 21,
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(typeof(1));
function mapPessoa(arr, thisArg){

    const objeto = typeof(thisArg);

    if(!arr || !arr.length){
        return;
    }

    
    if(objeto !== 'object' || !thisArg){
        return;
    }

    return arr.map(function (item){
        return item * this.idade;
    }, thisArg);

}

console.log('this -> Miguel',mapPessoa(arr, miguel));
console.log('this -> Heloize',mapPessoa(arr, heloize));

// sem usar o this:

function mapSemThis(arr){
    return arr.map((item) => item * 2)
}

const array = [1, 2, 3, 4, 5, 6];

console.log(mapSemThis(array));

console.log('-----------------------------------------');

// Atividade 2: Filter 

//Filtre e retorne todos os números pares de um array.

const arrayFilter = [1, 2, 3 , 4, 6, 7, 8, 9,10];

function filtraNumsPar(arr){

    if(!arr || !arr.length){
        return;
    }

    return arr.filter(item => item % 2 === 0);;
}



console.log(filtraNumsPar(arrayFilter));

// Atividade 3: Reduce

// 1.Some todos os números de um array
// 2.Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.

// Parte 1:

function somaNum(arr){

    if(!arr || !arr.length) return;

    return arr.reduce((acumulador, valorAtual) => acumulador + valorAtual);
}

const arrayReduce = [2, 10, 23, 26, 30, 53];

console.log(somaNum(arrayReduce));


// Parte 2:

const lista_gastos = [
    {
    name: 'chocolate',
    preco: 3,
    },
    {
    name: 'ceral',
    preco: 7,
    },
    {
    name: 'Pão',
    preco: 5,
    }
];

console.log('------------------------------------------------');

// Atividade 3: Reduce

function saldo_menos_gastos(lista, saldo){

    if(!lista || typeof lista !== 'object') return;

    let valor = lista.reduce(function (valorAtual, itemAtual) { // O primeiro argumento começa com o valor de 0, a não ser que coloque que um valor inicial para o mesmo como um terceiro agurmento. O segundo argumento pode ser objeto ou um array.
        console.log(valorAtual);
        console.log(itemAtual);
        return valorAtual - itemAtual.preco;
    }, saldo);

    return valor;
}
console.log('Seu saldo final é de:', saldo_menos_gastos(lista_gastos, 150));