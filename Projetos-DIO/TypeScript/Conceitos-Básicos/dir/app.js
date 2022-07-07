"use strict";
// // Como podemos melhorar o esse código usando TS? 
var trabalho;
(function (trabalho) {
    trabalho[trabalho["Atriz"] = 0] = "Atriz";
    trabalho[trabalho["Padeiro"] = 1] = "Padeiro";
})(trabalho || (trabalho = {}));
//PESSOA 1
const pessoa1 = {
    nome: 'maria',
    idade: 29,
    profissao: trabalho.Atriz
};
//PESSOA 2
const pessoa2 = {
    nome: 'roberto',
    idade: 19,
    profissao: trabalho.Padeiro
};
//PESSOA 3
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: trabalho.Atriz
};
//PESSOA 4
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: trabalho.Padeiro
};
// RESPOSTA
// enum Trabalho {
//     Atriz,
//     Padeiro
// }
// interface Pessoa{
//     nome: string,
//     idade: number,
//     profissao: Trabalho
// }
// let pessoa1: Pessoa = {
//     nome: 'maria',
//     idade: 29,
//     profissao: Trabalho.Atriz
// };
// let pessoa2: Pessoa = {
//     nome: 'roberto',
//     idade: 19,
//     profissao: Trabalho.Padeiro
// };
// let pessoa3: Pessoa = {
//     nome: 'laura',
//     idade: 32,
//     profissao: Trabalho.Atriz
// };
// let pessoa4: Pessoa = {
//     nome: "carlos",
//     idade: 19,
//     profissao: Trabalho.Padeiro
// }
