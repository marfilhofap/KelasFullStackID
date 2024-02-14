// 1. Tau Defaul value ba Parameter sira iha Function

function profile (naran = 'Fidel', tinan = 17){
    console.log(`Hau nia naran ${naran} no tinan ${tinan}`)
}

// 2. Spread Operator: Uja Array ka Object sai hanesan argument

const laos_array = Math.max(1, 3, 2, 5, 7, 8, 4);

const dadus_array = [1, 3, 2, 5, 7, 8, 4];
const array_ona = Math.max(...dadus_array); // Aumenta ... ba nia oin molok bolu array refere sai hanesan argument

// 3. Merge array uja spread operator : Gabung array ho array (Atu hanesan ho Push)

const numeru = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const letra = ['Fidel', 'Maxy', 'Lolo', 'Afonso', 'Alex'];

const aumenta_numeru = numeru.push(letra) // se uja Push rejultadu ladiak
const kahur = [...numeru, ...letra]; // Uja spread : dadus nafatin array normal

// 4. Merge object uja spread operator : Gabung object ho object 

const user = {
    username: 'fidel@gmail.com',
    password: 'fidel123'
}

const credential = {
    level:'admin', 
    id:123
}

const aumenta_dados_user = {...user, ...credential}

// 5. Spread Operator ba parametru nebe barak

// Exemplu 1
const sumAll = (...num) => {
    return num.reduce((total, el) => total + el);
}

sumAll(1,3,5,7,8,9,4,3,5,3,2,3,4,5,6,7,8,8,7,623,234,23,42,234,23,423,4234);


// Exemplu 2
const naran = ['Fidel', 'Maxy', 'Lolo', 'Afonso', 'Alex', 'Salus'];

const manan_nain = (Juara_1, Juara_2, Juara_3, ...restu) => {
    console.log(`ida nebe hetan Juara 1 mak ${Juara_1}`);
    console.log(`ida nebe hetan Juara 2 mak ${Juara_2}`);
    console.log(`ida nebe hetan Juara 3 mak ${Juara_3}`);
    console.log(`Restu sira: ${restu}`);
}

manan_nain(...naran);

// 6.1 Destructing : Fahe kedas array ida idak nia index ba malu (Array)

const naran_sira = ['Fidel', 'Maxy', 'Lolo', 'Afonso', 'Alex', 'Salus', 'Silvino'];

const [Juara_1, Juara_2, Juara_3, ...restu] = naran_sira;

console.log(restu)

// 6.2 Destructing : Fahe kedas object ida idak nia index ba malu (object)
// Kuandu Object entaun variavel tenki hanesan ho naran nebe iha object
// Se hakarak muda entaun halo alias hanesan iha okos
const utilijador = {
    username: 'fidel@gmail.com',
    password: 'fidel123'
}

const { username: usr, password: pwd } = utilijador;


// 6.3 Destructing : Function

// Exemplu 1
const utilizador = {
    username: 'fidel@gmail.com',
    password: 'fidel123',
    role: 'admin'
}

const userRole = ({username, role}) =>{
    return `${username} - ${role}`;
}

userRole(utilizador)


// Exemplu 2

const animes = [
    {
        titulu: 'Attack on Titan',
        rating: 90,
        year: 2013
    },
    {
        titulu: 'One Piece',
        rating: 89,
        year: 1999
    },
    {
        titulu: 'Bleach',
        rating: 82,
        year: 2004
    },
    {
        titulu: 'Hunter x Hunter',
        rating: 90,
        year: 2011
    },
    {
        titulu: 'Naruto',
        rating: 84,
        year: 2002
    },
];

const dadus_anime = animes.map((anim) => {
    return `${anim.titulu} - ${anim.year} ho rating ${anim.rating}`
})

// bele mos hanesan ne
// Ida ne Destructing iha FUnction nia laran ona
const dadus_anime_1 = animes.map(({titulu, year, rating}) => {
    return `${titulu} - ${year} ho rating ${rating}`
})

