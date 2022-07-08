// Módulos: São arquivos Javascript que tem a capacidade de exportar e importar informações de outros arquivos do mesmo tipo.
// Exemplo uma arquivo main.js que importa info de arquivos counter.js e display.js

// Uma grande vantagem é a organização de código, alem de possibilitar compartilhamento de variáveis 
// em escopos diferentes e explicita as dependências dos arquivos.

// Existem duas maneiras de exportar

// Nemed: caso queira exporta funções específicas do código:

export function mostraIdade(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

// OU

function mostraIdade2(pessoa){
    return `A idade de ${pessoa.nome} é ${pessoa.idade}`;
}

export{ // Aqui fica as funções que serão exportadas.
    mostraIdade2
}

// Nemed: comporta apenas uma função, só pode haver um por arquivo:
export default mostraIdade2;


// Para importar: 

// NAMED :import {funcao, variavel, classe} from './arquivo.js';
// DEFAULT : import valorDefault from './arquivo.js'

//----------------------------------------------------------------------------------

// Trocando o nome de imports : import { arquivo as Apelido } from './arquivo.js';

// Apelido.metodo();

//----------------------------------------------------------------------------------

// Importando tudo de um arquivo : import * as INFOS from './arquivo.js';

// INFOS.metodoA();

// console.log(INFOS.variavel);

//----------------------------------------------------------------------------------

// Vinculando ao HTML:

// <script type="module" src="./main.js"></script>