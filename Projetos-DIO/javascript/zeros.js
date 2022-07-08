function substituiNumPar(array){
    if(!array) return -1;
    if(!array.length) return -1;

    for (let i = 0; i < array.length; i++) {

        if(array[i] === 0){
            console.log("você já é zero!")
        }
        else if(array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }

    return array;
}

let array = [2, 6, 9, 10, 0, 11, 50, 63];

console.log(substituiNumPar(6));

