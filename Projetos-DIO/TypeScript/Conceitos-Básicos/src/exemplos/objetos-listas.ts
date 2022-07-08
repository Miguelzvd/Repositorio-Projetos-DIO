// const pessoa = {
//     nome: 'mariana',
//     idade: 28,
//     profissao: 'desenvolvedora'
// }

// pessoa.idade = 25;

// const andre: {nome: string, idade: number, profissao: string} = {
//     nome: 'ander',
//     idade: 25,
//     profissao: 'pintor'
// }

// const paula: {nome: string, idade: number, profissao: string} = {
//     nome: 'Paula',
//     idade: 25,
//     profissao: 'Desenvolvedora'
// }

// enum Profissao{ // Um grupo de constante
//     Professora,
//     Atriz,
//     Desenvolvedora,
//     JogadoraDeFutebol
// }

// interface Pessoa{
//     nome: string,
//     idade: number,
//     profissao?: Profissao
// }

// interface Estudante extends Pessoa {
//     materias: string[]
// }

// const fulano: Pessoa = {
//     nome: 'fulano', 
//     idade: 23,
//     profissao: Profissao.Desenvolvedora
// }

// const fulana: Estudante = {
//     nome: 'fulana',
//     idade: 20,
//     profissao: Profissao.Professora,
//     materias: ['Matemática discreta', 'Programação']
// }

// const joao: Estudante = {
//     nome: 'joao',
//     idade: 20,
//     materias: ['Matemática discreta', 'Programação']
// }

// function lista(lista: string[]){
//     for(const item of lista){
//         console.log('- ', item);
//     }
// }

// lista(joao.materias);