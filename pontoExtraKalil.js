//1 - Definição de registro

const aluno = Object.freeze({
    nome : '',
    idade : 0,
    matricula : 0,
    curso : ''
})

//2 - Criação da turma

const turma = Object.freeze([])

//3 - Implementação de alunos

const adicionarAluno = (nome, idade, matricula, curso) => {
    const alunoNovo = {...aluno}
    alunoNovo.nome = nome
    alunoNovo.idade = idade
    alunoNovo.matricula = matricula
    alunoNovo.curso = curso
    return [...turma,alunoNovo]
}


//4 - Função que lista alunos

const listarAlunos = () => {
   return turma.map(({nome, idade, matricula, curso}) => 
        (`nome: ${nome}, idade: ${idade}, matrícula: ${matricula}, curso: ${curso}`))
}

//5 - Busca por curso

const buscaPorCurso = (curso) => {
    return turma.filter((aluno => aluno.curso===curso))
    }

//6 - Remover aluno pelo nome

const removerAluno = (nome) => {
    return turma.filter((aluno) => aluno.nome !== nome)
    }


//7 - Ordenação

const ordenarAlunos = () => {
    return [...turma].sort((a, b) => a.matricula - b.matricula)
}

//8 - Contagem de alunos por curso

const contagemPorCurso = () => {
    return `Ciência da Computação: ${buscaPorCurso('CC').reduce(acc => acc += 1, 0)} pessoas
Engenharia da Computação:  ${buscaPorCurso('EC').reduce(acc => acc += 1, 0)} pessoas
Sistemas de Informação: ${buscaPorCurso('SI').reduce(acc => acc += 1, 0)} pessoas`
}

//9 - Editar aluno 
//Primeiro é a matricula antiga e logo depois os dados editados.
const editarDados = (matriculaAntiga) => (nome, idade, matricula, curso) => {
    const turmaNova = turma.filter((aluno) => aluno.matricula !== matriculaAntiga)
    const outroAluno = {...aluno}
    outroAluno.nome = nome
    outroAluno.idade = idade
    outroAluno.matricula = matricula
    outroAluno.curso = curso
    return [...turmaNova, outroAluno]
}

