// metodo map: ele faz uma varredura por cada um item dentro do array jogando numa função callback para fazer itereção
// sintaxe: var.map(callback, thisArg)

let number = [1, 2, 3];

console.log(number.map((num) => num * 2));

// console.log(doubles);

// forEach: tem basicamente a mesma função do metodo map.

let array2 = [2, 4, 6];

console.log(array2.forEach((item) => item * 2)); // a diferença é ele não retorna os dados.
