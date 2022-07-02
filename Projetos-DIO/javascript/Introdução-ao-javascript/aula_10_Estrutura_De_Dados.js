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

//numeros:

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