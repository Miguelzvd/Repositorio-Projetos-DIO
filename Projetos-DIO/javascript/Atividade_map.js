function getAdmins(map){

    let listaAdmin = [];

    for([key, value] of map){
        if(value === 'admin'){
            listaAdmin.push(key);
        }
    }

    return listaAdmin;
}

const map = new Map();
map.set('Miguel', 'admin');
map.set('Pedro', 'guest');
map.set('Heloize', 'admin');
map.set('Herinque', 'guest');
map.set('Edilson', 'admin');

let adminstradores = getAdmins(map);

console.log(map);
console.log(adminstradores);



// Atividade 2

function removeRepetidos(arr){

    let array_set = new Set(arr);

    return [...array_set]; // separando os elementos e formando um array
}

let array = [30, 30, 40, 5, 223, 2049, 3034, 5];

array = removeRepetidos(array);

console.log(array);
