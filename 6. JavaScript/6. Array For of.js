// Exemplu 1
const aifuan = ['Apel', 'Anggur', 'Salak', 'Mangga', 'Jambu'];

// Se uja For babain
for (let i = 0; i < aifuan.length; i++) {
    console.log(`Aifuan ${aifuan[i]}`)  
}
// Se bainhira uja ona For Of
for (let aifuan_sira of aifuan){
    console.log(`Aifuan ${aifuan_sira}`)
}


// Exemplu 2
let profile_udsi = [
    ['Fidel', 25, 'Dev'], 
    ['Maxi', 26, 'Dev'],
    ['Alex', 30, 'DB Adm'],
]
// Se uja For babain
for(let i = 0; i < profile_udsi.length; i++){
    console.log(`- Ekipa UDSI ${[i+1]}:`)
    for(let j = 0; j < profile_udsi[i].length; j++){
        console.log('     - '+profile_udsi[i][j]);
    }
}  
// Se bainhira uja ona For Of
for (let row of profile_udsi){
    for ( naran of row ){
        console.log(`- ${naran}`)
    }
}