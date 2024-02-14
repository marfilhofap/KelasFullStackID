const studentsScores = {
    Fidel : 10,
    Sarra : 5,
    Mylla : 9,
    Miggy : 8,
    Maxy : 10,
    Ajito : 6
}
// console.log(studentsScores.Fidel)

for (let Student in studentsScores){
    console.log(`Estudante ho naran ${Student} hetan valor ${studentsScores[Student]}`)
}

let total = 0
let scores = Object.values(studentsScores)  // Muda Object Value ba Array
for (let score of scores){
    total += score
}

console.log(`Valor Media husi estudante sira mak: ${total/scores.length}`)