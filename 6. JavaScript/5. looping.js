// Example 2
let udsi = ['Fidel', 'Maxi', 'Afonso', 'Apeu', 'Alex', 'Lolo', 'Salus', 'Jose', 'Lido']
udsi.sort();

for (let index = 0; index < udsi.length; index++) {
    console.log(index+1 +'. '+udsi[index]);
}


// Example 2
let profile_udsi = [
    ['Fidel', 25, 'Dev'], 
    ['Maxi', 26, 'Dev'],
    ['Alex', 30, 'DB Adm'],
]

for(let i = 0; i < profile_udsi.length; i++){
    console.log(`- Ekipa UDSI ${[i+1]}:`)
    for(let j = 0; j < profile_udsi[i].length; j++){
        console.log('     - '+profile_udsi[i][j]);
    }
}   


// Example 3 (Do While)

const PASSWORD = 'admin123';

let pergunta = prompt('Hatama Password lai');

while(pergunta !== PASSWORD){
    pergunta = prompt('Hatama Password lai'); // Nia sei lao nafatin bainhira nia valor true
}
alert('Parabens, Password nebe ita hatama loos ona!')


// Example 4

let input = prompt('Dehan buat ruma mai?');

while(true){
    input = prompt(input);
    if(input === 'stop') break; // Bele uja Break ba kondisaun balun nebe ita hakarak
}
console.log('OK');


