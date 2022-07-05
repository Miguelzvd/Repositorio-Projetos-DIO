// Executa uma função em todos os elementos do array, retornando um valor único.
// Sintaxe: array.reduce(callback, initialValue)
// callback: função a ser executada a apartir do acumulador. callback(acumulador, valorAtual, index, array)

const array = [1, 2, 3];

console.log(array.reduce((acumulador, valorAtual) => acumulador + valorAtual)); // O primeiro argumento começa com o valor de 0, a não ser que coloque que um valor inicial para o mesmo como um terceiro agurmento. O segundo argumento pode ser objeto ou um array.
