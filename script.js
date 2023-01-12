/*
Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [x]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

let students = [
    {
        name:"João",
        nota1: 5,
        nota2: 10,
    },
    {
        name:"Letícia",
        nota1: 9,
        nota2: 10,
    },
    {
        name:"Diego",
        nota1: 5,
        nota2: 4,
    },
    {
        name:"Julia",
        nota1: 8,
        nota2: 10,
    },

]


function studentsAverage(nota1, nota2){
    return((nota1 + nota2) / 2)
}

function printStudentAverage(student){
    return`A média do aluno(a) ${student.name} é: ${studentsAverage(student.nota1, student.nota2)}`
}

for(let student of students){
    let averageMessage = printStudentAverage(student)

    if(studentsAverage(student.nota1, student.nota2) >= 7){
        alert(averageMessage + ` 
Parabéns, ${student.name}! você foi aprovado(a) no concurso!`)
    } else{
        alert(averageMessage + `
Não foi dessa vez ${student.name}! tente novamente!`)
    }
    

    
}

/*let studentsAverage = []

for(let student of students){
    studentsAverage.push(student.name, Number(students.nota1) + Number(students.nota2) / 2)

}
*/