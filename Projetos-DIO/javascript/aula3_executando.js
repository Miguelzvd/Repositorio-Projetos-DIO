function return_even_values(array){
    let evenNums = "";
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0){
            evenNums = evenNums + ` ${array[i]}`;
        }
        else{
            console.log(`${array[i]} não é par`)
        }
    }
    console.log("os numeros pares são:", evenNums);
}

let array = [1, 2, 3 , 4, 5, 6, 7, 8]

return_even_values(array);