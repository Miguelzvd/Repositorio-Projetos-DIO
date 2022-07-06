// // Aula 9:
// // Omitir propriedade específica em uma interface.

// interface Pessoa{
//     nome: string;
//     idade: number;
//     nacionalidade: string;
// }

// interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{// Permite a remoção de 'nacionalidade' da interface 'Pessoa'.

// }


// // Aulta 7: Parte 2
// import $ from 'jquery';

// export const numero = 4;

// $.fn.extend({
//     novaFuncao(){
//         console.log('Chamou nova funcao');
//     }
// });

// $('body').novaFuncao();

// Aulta 7:
// Como importar bibliotecas no TS

// interface Estudante{
//     name: string;
//     idade: number;
// }

// interface Estudante{ // Quando se tem o memos nome definido na interface, ele soma as propriedades setadas anteriormente com a novas.
//     serie: string;
// }


// //---------------------------------------------------------


// // Aula 6:
// // Variaveis com readonly.

// interface Cachorro{
//     nome: string;
//     idade: number;
//     parqueFavorito?: string;
// }

// type CachorroSomenteLeitura = {
//     readonly[K in keyof Cachorro]-?: Cachorro[K]; // Para cada chave que ele passa, a chave respectiva sera setada como apenas valor de leitura. "-?": remove as chaves opcionais.
// }

// class MeuCachorro implements CachorroSomenteLeitura{
//     nome: string;
//     idade: number;
//     parqueFavorito: string;
    
//     constructor(nome:string, idade:number){
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const cao = new MeuCachorro('Apolo', 14)

// //---------------------------------------------------------

// // Aula 5
// // carcter para tornar propriedades opcionais.

// interface Usario {
//     id: string;
//     email: string;
//     cargo?:'gerente' | 'coordenador' | 'supervisor' | 'funcionario'; // torna essa propriedade opcional na hr de chamar. // Torna esta propriedade opcional
// }

// function redirecione(usuario: Usario){
//     if(usuario.cargo){
//         // redireciona(usario.cargo)
//     }
// }

// //---------------------------------------------------------

// // Aula 4
// // Devolvendo condicionais a partir de parâmetros.

// interface IUsario {
//     id: string;
//     email: string;
// }

// interface IAdmin {
//     cargo: 'gerente' | 'coordenador' | 'supervisor'
// }

// function redirecione(usario: IUsario | IAdmin){
//     if('cargo' in usario){
//         // redirecionar para área de administração
//     }

//     // redireciona para área do usário
// }

// //---------------------------------------------------------


// Aula 3
// Generic types
function AdicionaApendiceALista<T>(arr:T[], valor:T){
    return arr.map(() => valor);
}

AdicionaApendiceALista([1, 2, 3], 1);

//---------------------------------------------------------


// Aula 2
const input = document.getElementById('input') as HTMLInputElement; // É necessario declaro o tipo de dado HTML está capturando.

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
})


// //---------------------------------------------------------


// // Aula 1
// // types
// // interface

// interface Animal { // Uma interface serve para definir contratos.
//     nome: string;
//     tipo: 'terrestre' | 'aquático';
//     domestico: boolean;
// }

// interface Felino extends Animal{
//     visaoNoturna: boolean; // Tipo bool, pode ou não vê a noite
// }

// interface Canino extends Animal{
//     porte: 'pequeno' | 'medio' | 'grande';
// }

// type Domestico = Felino | Canino; // Domestico pode ser Felino ou Canino

// const animal: Domestico = {
//     nome: 'cachorro',
//     tipo: 'terrestre', 
//     domestico: true,
//     porte: 'medio',
// }

// // Interface cria objetos, vulgo contrato de estrutura de dados.
// // Type geralmente faz junções desses contratos, utilizando o tipo bool(|, &).