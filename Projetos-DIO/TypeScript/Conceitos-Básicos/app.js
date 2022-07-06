"use strict";
const pessoa = {
    nome: 'mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
const andre = {
    nome: 'ander',
    idade: 25,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao || (Profissao = {}));
const fulano = {
    nome: 'fulano',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const fulana = {
    nome: 'fulana',
    idade: 20,
    profissao: Profissao.Professora,
    materias: ['Matemática discreta', 'Programação']
};
const joao = {
    nome: 'joao',
    idade: 20,
    profissao: Profissao.Professora,
    materias: ['Matemática discreta', 'Programação']
};
