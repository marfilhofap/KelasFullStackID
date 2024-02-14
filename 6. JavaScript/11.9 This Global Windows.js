// Bainhira uja this iha object nebe uja arrow function, entaun this sei ba liu iha Global Windows Object nian


// Exemplu This nebe uja ba FUnction normal ne lao diak
const profile = {
    naran: 'Fidel',
    tinan: 26,
    hela_fatin: 'Bidau-Santana',
    konese: function(){
        console.log(this);
        return `Hau nia naran ${this.naran} ho idade ${this.tinan} no hela iha ${this.hela_fatin}`
    }
}

// Maibe se uja ba Arrow Function entaun akontese error
const profile_1 = {
    naran: 'Fidel',
    tinan: 26,
    hela_fatin: 'Bidau-Santana',
    konese: () => {
        console.log(this); // Se ita koko hare this, nia refere ona ba Global Window laos Object nebe ita iha ne ona
        return `Hau nia naran ${this.naran} ho idade ${this.tinan} no hela iha ${this.hela_fatin}`
    }
}