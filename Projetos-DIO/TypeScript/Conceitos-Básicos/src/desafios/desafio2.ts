// // Como podemos melhorar o esse código usando TS? 
export {} // Para não reclamar de variáveis duplicadas

enum trabalho{
    Atriz,
    Padeiro
}

interface Pessoa{
    nome: string;
    idade: number;
    profissao: trabalho;
}

//PESSOA 1
const pessoa1: Pessoa = {
    nome: 'maria',
    idade: 29,
    profissao: trabalho.Atriz
};

//PESSOA 2
const pessoa2: Pessoa = {
    nome: 'roberto', 
    idade: 19,
    profissao: trabalho.Padeiro
};

//PESSOA 3
let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: trabalho.Atriz
};

//PESSOA 4
let pessoa4: Pessoa ={
    nome: "carlos",
    idade: 19,
    profissao: trabalho.Padeiro
};