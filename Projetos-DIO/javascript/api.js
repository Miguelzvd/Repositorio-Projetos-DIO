// uma API é uma forma de intermediar os resultados do back-end com o que é aprensentado no front-end
// é possivel acessa-la por meio de URLs.
// é muito comum retornarem seus dados no formato .json, portanto precisamos tratar esses dados quando sos recebermos.

// fetch é um metodo de consumo de API:

// Exemplo do metodo fetch:

fetch(url, options).then(response => response.json()).then(json => console.log(json)); // retorna uma promise