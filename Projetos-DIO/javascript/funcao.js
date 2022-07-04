// Tipos de funções:

// Função anonima:

const soma = function(a,b){
    return a+b;
} // A função não possui nome e ela ta sendo atriuida a variável "soma".

console.log(soma(6,4));

console.log("------------------------------");

// Função autoinvocavel:

(function(){
    let name = "Digital Innovation One"
    return console.log(name);
})(); //Uma função anônima que está entre parênteses, seguida por outro par de parênteses que representa sua chamad. 

const resultado = (
    function(num1, num2){ 
    return num1 + num2;
})(10, 6);

console.log(resultado);

console.log("------------------------------");

// Callback: basicamente é uma função passada como paramentro para outra função.

const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const Soma = function(num1, num2){
    return num1 + num2;
}

const Sub = function(num1, num2){
    return num1 - num2;
}

const resultadoSoma = calc(Soma, 1, 2);
const resultaSub = calc(Sub, 1, 2);

console.log(resultadoSoma);
console.log(resultaSub);

console.log("------------------------------");

// Valores padrão dentro de uma função:

function exponencial(array, num = 1){// pode atribuir um valor padrão para todo parametro, enão quando chamar a função e não especificar um valor, o parametro irá utilizar o valor padrão.
    const resultado = [];
    for(let i = 0; i < array.length; i++){
        resultado.push(array[i] ** num);
    }
    return resultado;
}

let array_exponencial = [1, 2, 3, 4, 5];

console.log(exponencial(array_exponencial, 2));

console.log("------------------------------");

// Objeto "arguments"

function findMax() { // arguments nada mais é que um objeto com todo os parametros passados quando a função foi invocada(é um array sem nome);
    let max = -Infinity; // valor negativo infinito.

    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max;
}

function showArgs() {
    return arguments; // retorna os paramentos/argumentos passados na função.
}

console.log(findMax(1, 3, 6 , 20, 10));
console.log(showArgs(52, 60, 4));

console.log("------------------------------");

// Array e Objetos:

function sum(x, y, z, t){
    return x + y + z + t;
}

const numbers = [1, 2, 3, 5];

console.log(sum(...numbers)); // os "..." possibilita que use os elementos dentro do array separadamente na função. Isso se chama spread.

function rest(...args) { // o contrario acontece quando a função é chamada com o elementos individualmente, então os elementos se juntam formando um array. Isso se chama rest. 
    return args;
}

console.log(rest(5, 6, 3, 70, 64));

const user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
};

// Entre chaves {}, podemos filtrar apenas os dados que nos interessa num objeto.

function userId({id}){
    return console.log(id)
}

function getFullName({fullName: {firstName: first, lastName: last}}){
    return console.log(`${first} ${last}`);
}

// Exemplo 1:

userId(user);

// Exemplo 2:

getFullName(user);

console.log("------------------------------");

// This: A palabra reservada "this" é uma referência de contexto.

const pessoa = {
    firstName: "André",
    lastName: "Soares",
    id: 1,
    fullName: function(){
        return console.log(this.firstName + " " + this.lastName);
    },
    getId: function(){
        return console.log(this.id);
    },
    returnObj: function(){
        return console.log(this);
    }
};

pessoa.fullName(); // Retorna o nome completo da pessoa.

pessoa.getId(); // Retorna o id da pessoa.

pessoa.returnObj(); // Retorna o objeto.

console.log("------------------------------");

// Manipulando this:

const pessoa_ = {
    nome: "Miguel"
};

const animal = {
    nome: "Tony"
};

function getSomething() {
    return console.log(this.nome);
}

getSomething.call(pessoa_); //call() é um metodo do objeto "fução" que possibilita colocar o objeto no qual o this ira se referir, mesmo a funcção não esperando parametro. (Só é possivel utiliza-la se estiver usando a palavra reservada "this").

getSomething.apply(pessoa_); //apply() nesse caso tem a mesma funcionalidade do metodo call.

const myObj = {
    num1: 2,
    num2: 4,
};

function soma_(a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma_.call(myObj, 1, 5); // É possivel passar parametros para essa função separando-os por virgula.

soma_.apply(myObj, [1, 5]); // Nesse caso a diferença tá que o apply so recebe paramentros dentro de array.

console.log("------------------------------");

// Bind: Clona a estrutura da função onde é chamada e aplica o valor do objeto passado como parâmetro.

const retornaNomes = function(){
    return console.log(this.nome);
}

let bruno = retornaNomes.bind({nome: 'Bruno'});

bruno();

// Arrow function: () => {};

const helloWorld = () => { // Isso é uma arrow function.
    return console.log("Hello World: arrow function 1");
}

// Tambem pode ser escrita dessa maneira

const HelloWorld = () => console.log("Hello World: arrow function 2");

helloWorld();

HelloWorld();

const Soma1 = (a, b) => console.log(a + b); // Caso exista apenas uma linha, pode dispensar as chaves.

const mostrarNum = a => console.log(a); // Caso exista apenas um parâmetro, pode dispensar o parênteses.

var Soma2 = (a, b) => console.log(a + b);