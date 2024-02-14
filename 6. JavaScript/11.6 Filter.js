// Filter : Dadus nebe iha array no ita filtra bazeia ba kondisaun ruma
// Atu hanesan Maping

// Example 1
const numeru = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const numeruInpar = numeru.filter((n) =>{
    return n % 2 === 1;
})

const numeruFoun = numeru.filter((n) =>{
    return n < 5;
})

// Example 2 
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

const animeDiak = animes.filter((anime) => anime.rating >= 85);
const animeDiakoituan = animes.filter((anime) => anime.rating >= 75 && anime.rating < 85);
const animefoun = animes.filter((anime) => anime.year >= 2010);

// Bele aumenta maping
const animediaknianaran = animeDiak.map((naran) => naran.titulu);

// Bele mos filter no maping dala ida iha tempu eneb hanesan
const animediaknianaran_2 = animes.filter((anime) => anime.rating >= 85).map((naran) => naran.titulu);

// Se kondisaun barak bele hakerek hanesan ne maibe labele haluha return
const animediaknianaran_3 = animes.filter((anime) => {
    return anime.rating >= 85;
}).map((naran) => {
    return naran.titulu; 
})