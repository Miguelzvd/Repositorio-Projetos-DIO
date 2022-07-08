function verificaPalindromo(string){
    if (!string) throw "String inválida"; // retorna um erro no console ou terminal

    return string === string.split('').reverse().join('');
}

console.log(verificaPalindromo('cat'));
console.log(verificaPalindromo('')); // Exemplo