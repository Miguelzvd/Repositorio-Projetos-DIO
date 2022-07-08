function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

let pessoa = {
    nome: "Miguel",
    idade: 22,
};

console.log(calculaIdade.call(pessoa, 8));
console.log(calculaIdade.apply(pessoa, [8]));