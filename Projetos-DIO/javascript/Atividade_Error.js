// function capturaError(arr, num){
//     try{
//         if(!arr && !num) throw new ReferenceError('Falta parâmetro!');
//         if(typeof arr !== 'object') throw new TypeError('Envie um elemento tipo array!');
//         if(typeof num !== 'number') throw new TypeError('Envie um elemento tipo número!');
//         if(arr.length !== num) throw new RangeError('Tamanho do array inválido!');

//         return arr;
//     }
//     catch(error){
//         if(error instanceof RangeError){
//             console.log(`Range error! \n${error.stack}`);
//         }
//         else if(error instanceof ReferenceError){
//             console.log(`Reference error! \n${error.stack}`);
//         }
//         else if(error instanceof TypeError){
//             console.log(`Type Error! \n${error.stack}`);
//         }
//         else{
//             console.log(`Outro tipo de erro! \n${error}`)
//         }
//     }
// }


// console.log(capturaError());

function validaArray(arr, tamanho) {
    try {
      if (!arr.length || arr.length !== tamanho) throw new RangeError("O tamanho do array é inválido");
  
      return arr;
    } catch(e) {
      if (e instanceof RangeError) {
        return console.log(e.message);
      } else {
        return e;
      }
    }
} 

validaArray();
  
  