const numeru = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Ezemplu 1 : forEach babain
// function print(element){
//     console.log(element);
// }
// numeru.forEach(print)

// Example 2 : Function sai hanesan argument
numeru.forEach(function(el){
    if(el % 2 === 0){
        console.log(el)
    }
})

// Example 3 : 
const animes = [
    {
        titulu: 'Attack on Titan',
        rating: 90,
    },
    {
        titulu: 'One Piece',
        rating: 89,
    },
    {
        titulu: 'Bleach',
        rating: 82,
    },
    {
        titulu: 'Hunter x Hunter',
        rating: 90,
    },
    {
        titulu: 'Naruto',
        rating: 84,
    },
];

animes.forEach(function(anime){
    console.log(`${anime.titulu} - ${anime.rating}/100`)
})