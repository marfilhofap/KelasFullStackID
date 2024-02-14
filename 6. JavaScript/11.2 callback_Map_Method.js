//  Map Method : hanesan array callback ida nebe modifika ona iha function
// Output husi Map nafatin array

// Example 1

const numeru = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Array Antes
const double_numeru = numeru.map(function(num){ // array depois de modifikasaun
    return num * 2;
})

// Example 2
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

const animes_modif = animes.map(function(anim){
    return anim.titulu.toUpperCase();
})