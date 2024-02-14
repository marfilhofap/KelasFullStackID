const profile = {
        naran : 'Fidel', 
        tinan : 26, 
        tebes : true, 
        nomor_sapatu : [39, 40, 41, 42],
        husi_nebe : {
            munisipiu : 'Lautem',
            postu : 'Lospalos',
            suku : 'Fuiloru',
            aldeia : 'Bemoris'
        }
 }

//  Maneira 1
console.log(profile['husi_nebe']['aldeia'])

// Maneira 2
console.log(profile.husi_nebe.aldeia)

// Maneira 3
console.log(profile.nomor_sapatu[2])

profile.naran = 'Maxibiano'
profile['tinan'] = 25
profile.generu = 'M' // Aumenta tan dadus ba object
console.log(profile)

