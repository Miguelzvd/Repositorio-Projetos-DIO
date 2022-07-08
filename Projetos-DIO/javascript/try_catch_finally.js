function verificaPalindromo(string){
    if (!string) throw "String inválida";
    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try {
    verificaPalindromo(string);
    }
    catch(error){ // Esta função só é executada caso haja erro, ela pega o erro retornado do try 
    console.log(error);
    }
    finally{ // Essa função é executada idependentemente. Por tanto todo o resto executa, e por fim ela é executada
        console.log('A string envida foi: ' + string);
    }
}

tryCatchExemplo('');