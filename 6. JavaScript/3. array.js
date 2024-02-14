// Push = Aumenta husi Kotuk
// Pop = Hamos husi Kotuk
// Shift = hasai husi oin
// ushift = aumenta husi oin

let profile = ['Fidel', 26, 'Bidau Santana', 'CFP', 'UNTL', 'CFP'];

// console.log(profile);
// console.log(profile[3]);
// console.log(profile.push(5));
// console.log(profile);
// console.log(profile.push('Mhey', 22));
// console.log(profile);
// console.log(profile.pop());
// console.log(profile);
// console.log(profile.unshift(1));
// console.log(profile);
// console.log(profile.shift());
// console.log(profile);



// Concat : junta array ba malu
// indexOf : buka dadus iha array no fo sai nia index 
// includes : Buka dadus iha arra no fo sai boolean
// short() : Ordena
// splice : Muda Conteuru array
// slice : Hamos dadus iha array husi oin ba kotuk
// reverse : fila fali array
// Join : join dadus iha array

// let profile2 = ['Mhey', 22, 'Delta 1', 'Parteira', 'UNTL'];
// let profile3 = profile.concat(profile2);
// console.log(profile3);
// console.log(profile.indexOf('CFP'));
// console.log(profile.includes('CFP'));
// console.log(profile3.sort());


const fulan = ['Janeiru', 'Marsu', 'Abril', 'Jullu', 'Agustu', 'Setembru'];

console.log(fulan);
fulan.splice(1, 0, 'Fevereiru');
console.log(fulan);
fulan.splice(4, 1, 'Maio');
console.log(fulan);
// console.log(fulan.slice(2));
// console.log(fulan.slice(2, 3));
console.log(fulan.reverse())
console.log(fulan.join(' '))