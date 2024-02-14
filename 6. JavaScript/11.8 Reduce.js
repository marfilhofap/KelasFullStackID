// Reduce hodi fo output ida bazeia ba kondisaun ruma

// Exemplu 1
const folinRopa = [80, 12, 78, 60, 200, 12, 55];

const totalFolin = folinRopa.reduce((total, folin) => {
    return total + folin
})
// Iha ezemplu leten total sei foti uluk husi 80 no folin husi 12, depois de soma tiha total foti fali 92 (rejultadu husi soma antes) depois folin 78 fali no kontinua soma to ikus folin 55 nian
        // total = 80,  folin = 12,  = 92
        // total = 92,  folin = 78,  = 170
        // total = 170, folin = 60,  = 230
        // total = 230, folin = 200, = 430
        // total = 430, folin = 12,  = 442
        // total = 442, folin = 55,  = 497


// Exemplu 2
const animes = [
    {
        titulu: 'Attack on Titan',
        rating: 91,
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
        rating: 96,
        year: 2011
    },
    {
        titulu: 'Naruto',
        rating: 84,
        year: 2002
    },
];

const bestAnime = animes.reduce((animeDiak, animeSira) => {
    console.log(animeDiak, animeSira)
    if (animeSira.rating > animeDiak.rating){
        return animeSira;
    }
    return animeDiak;
})