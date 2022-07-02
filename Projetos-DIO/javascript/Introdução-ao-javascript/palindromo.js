function verificaPalindromo(palavra) {
  if (!palavra) return "string inexistente";

  let palavra_array = palavra.split(" ");

  for (let i = 0; i < palavra_array.length; i++) {
    if (palavra_array[i].split("").reverse().join("") !== palavra_array[i]) return false;
  }

  return true;
}
console.log(verificaPalindromo("amo radar"));
