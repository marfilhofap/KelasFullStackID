// - Lexical Scope : Function iha function nia laran 
function rekrutamentu(){
    const kareira = 'Programmer';
    
    function familiarismu(){
        let familia = `Se ema ruma nia familia iha laran bele hetan ${kareira}`
        console.log(familia);
    }

    familiarismu();
}


// - Function Expression : Bolu Variable nebe nia valor husi function

const vezes = function (valor){
    return valor * valor;
}

// console.log(vezes(5));


// - Function sai hanesan argument ba function seluk

function dalaRua (func){
    func()
    func()
}

function soeDadu(){
    let valor = Math.floor(Math.random() * 6) + 1
    console.log(valor)
}

// dalaRua(soeDadu)

// - Function nia valor nafatin Function

function niaRejultaduFunction(){

    const ran = Math.random()

    if (ran > 0.1){
        return function(){
            console.log('Parabens, valor boot liu duni')
        }
    } else {
        return function(){
            console.log('Deskulpa valor kiik liu')
        }
    }

}

const valor_fo_sai = niaRejultaduFunction();
valor_fo_sai()


