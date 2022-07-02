// Javascript é uma linguagem de tipagem dinâmica: pode mudar seu tipo de dado, exemplo: a = 1(valor númerico inteiro) -> a = "um"(valor em string).
// Javascript é fracamente tipada: não é necessario declarar o tipo da variável.

// EXEMPLO:

console.log("-----------------------------------");
let um = "um";

console.log(typeof(um)); 

um = 1;

console.log(typeof(um));

console.log("-----------------------------------");

// String:

let nome = "Migeul";

let sobre_nome = "Azevedo";

let concatenado = nome.concat(sobre_nome); //atribui a concatenização de sobre nome em nome.

console.log(concatenado);

console.log(concatenado[1]);

console.log(concatenado.length);

let frase = "Olá, tudo bem?" 

console.log(frase.split(""));

console.log(frase.includes("tudo"));

console.log(frase.startsWith("O"));

let frase_modificada = frase.replace(",", "!");

console.log("\n" + frase_modificada);

let exemplo = new String("blablabla");

console.log(exemplo);

console.log("-----------------------------------");

// Números:

let num = 100;

console.log(num + 3);

let PI = Math.PI;

console.log(PI);
console.log(Math.floor(PI)); // arredonda o numero para baixo.
console.log(Math.ceil(PI)); // arredonda o numero para cima.
console.log(Math.round(PI)); // arredonda o numero.

let porcento = 100;

console.log(porcento + "%"); // retorna uma string.

console.log(porcento.toString()); // converte um numero em uma string.

console.log("-----------------------------------");

//Booleano:

let validation = 3 === 0;

console.log(validation);

validation = 3 === 3;

console.log(validation);

console.log("-----------------------------------");


// Array:

// Existem duas forma de declarar arrays.

let array1 = []; 
let array2 = new Array();

console.log(array1);

console.log(array2);

array1.push(3);

console.log(array1);

array1.push(2); //  adiciona elemento no final da lista.

console.log(array1.length);

array1.pop(); // tira o elemento do final da lista/array.

console.log(array1);

array1.push(2);

console.log(array1);

array1.shift(); // tira o elemento do inicio da lista/array.

console.log(array1);

array1.unshift(3); //adiciona elemento no inicio da lista

console.log("loop:")

for(let i = 0; i < array1.length; i++){
    console.log(array1[1]);
}

console.log(array1.includes(4)); // checa se dentro do array existe o elemento especificado no paramentro.

console.log(array1.every(item => item === 3)); //checa se todos os elementos dentro do array é igual ao elemento especificado dentro do array.

console.log(array1.some(item => item ===3)); // checa se existe dentro do array pelo menos um elemento especificado no parametro.

console.log(array1.reverse()); // inverte a ordem da lista/array

console.log("-----------------------------------");

