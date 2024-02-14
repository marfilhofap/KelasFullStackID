// Example 1

// Se uja Trycatch
try {
    profile.konese(); // Ne la mosu
} catch {
    console.log('Error!!') // Fo Notifikasaun ida ne
}

// Se la uja trycatch
//profile.konese(); // Mosu Error

console.log('Ida ne kontinua halao') // Se la uja Trycatch entaun ida ne la konsege ejekuta

// Example 2

function hakilar(msg){
    try {
        console.log(msg.toUpperCase()) 
    } catch (error) {
        console.log(error);
        console.log('Favor hatama string hanesan argument iha function hakilar()')
    }
}

// Se hau bolu function refere no tau argument String ruma ho diak, nia sei fo sai mos ho diak. lae entaun fo sai error tuir ita nia hakarak