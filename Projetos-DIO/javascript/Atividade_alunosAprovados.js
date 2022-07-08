
function recebeAluno(nome, nota){
    return alunos.push({nome: nome, nota: nota});
}

function alunosAprovados(arr, media, nomeAlunos) {

    let alunosAcimaDaMedia = [];

    for(let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if(nota >= media){
            alunosAcimaDaMedia.push(nome);
        }

    }
    
    return console.log(alunosAcimaDaMedia);
}

let alunos = [];

recebeAluno("Miguel", 10);
recebeAluno("Henrique", 9);
recebeAluno("Pedro", 5);
recebeAluno("Gabriel", 4);


alunosAprovados(alunos, 7, nomeAlunos);