// Map: é uma coleção de arrays no formato [chave, valor], ele tambem possui uma variedade de metodos.

// -Maps podem ter chaves de qualquer tipo;
// -Maps possuem a propriedade length;
// -Maps são mais fáceis de iterar;
// -Utilizado quando o valor das chaves é
// desconhecido;
// -Os valores tem o mesmo tipo.

const myMap = new Map();

console.log(myMap);

// utilizando map:

myMap.set('apple', 'fruit'); // Map(1) {"apple" => "fruit"}
console.log(myMap);

console.log(myMap.get('apple')); // "fruit"

myMap.delete('apple'); // true

console.log(myMap.get('apple')); // undefined
console.log(myMap);


console.log('-------------------------------------')

// Set: São estruturas que armazenam apenas valores únicos.

// -Possui valores únicos;
// -Em vez da propriedade
// length, consulta-se o
// número de registros pela
// propriedade size;
// -Não possui os métodos
// map, filter, reduce etc.

const mySet = new Set();
console.log(mySet);

mySet.add(1);
mySet.add(5);
console.log(mySet);


console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false

mySet.delete(5);

console.log(mySet);