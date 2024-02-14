// This uja iha function nia laran hodi bolu properti nebe iha object hanesan

const profile = {
    naran: 'Fidel',
    tinan: 26,
    hela_fatin: 'Bidau-Santana',
    konese: function(){
        return `Hau nia naran ${this.naran} ho idade ${this.tinan} no hela iha ${this.hela_fatin}`
    }
}

profile.naran = 'Bangke'; // Ita bele troka Property husi object refere
console.log(profile.konese())