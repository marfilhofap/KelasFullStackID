// Every (Atu hanesan ho AND): tenki dadus hotu nebe iha array kona kriteria nebe ita hakarak foin TRUE, ida deit mak lahanesan mos false;
// Some (Atu hanesan ho OR): Dadus ida deit mak hanesan ina kriteria nebe ita tau ba entaun true ona, kecuali la kona hotu kriteria maka nia sei false

// Exemple :

const valorExame = [80, 85, 79, 90, 93, 77];
const passa = valorExame.every((valor) => valor >= 75) // true: se hau muda ida ba 70 lansung false kedas


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

// Imajina hau impresta kolega nia filme anime ida, hau hakarak hatene anime nebe hau foti ne foun iha kalae
const animefoun = animes.some((anime) => anime.year >= 2010); // Fo sai tru tamba entre anime hotu, iha anime nebe foun tuir kondisaun nebe hau tau ba