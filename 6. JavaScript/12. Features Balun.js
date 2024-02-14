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


