// Criar um programa que calcula a média
// das turmas de studentsgrades entre os students e envia
// message do cálculo

const classA = [
    {
        name: 'Vitor',
        grade: 9.5
    },
    {
        name: "Carla",
        grade: 10
    },
    {
        name: 'Croto',
        grade: 2
    }

]

const classB = [
    {
        name: 'Brule',
        grade: 9.5
    },
    {
        name: "Bade",
        grade: 5
    },
    {
        name: 'Wes',
        grade: 8
    },
    {
        name: 'Novo Aluno',
        grade: 5
    }
]


function calculateAverage(students) {
    let sum = 0
    
    for (let i = 0; i < students.length; i++){
        sum = sum  + students[i].grade
    }

    return average = sum / students.length
}

function message(average, turma) {
    
    if (average > 5){
        console.log(`${turma} average ${average.toFixed(2)}. Greetings!`)
    } else {
        console.log(`${turma} average: ${average.toFixed(2)}. Its not good.`)
    }
}

function markAsFlunked(student) {
    student.reprovado = false
    
    if (student.grade < 5) {
        student.reprovado = true;
    }
}

function sendMessageFlunked(student) {
    if (student.reprovado) {
        console.log(`${student.name} Flunked!`)
    }
}

function studentsFlunkeds(students) {
    for (let student of students) {
        markAsFlunked(student);
        sendMessageFlunked(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

const turma1 = message(average1, 'Class A')
const turma2 = message(average2, 'Class B')

studentsFlunkeds(classA)
studentsFlunkeds(classB)