// 1. Maneira Define Function
function soeDadu(){
    console.log(Math.floor(Math.random() * 6) + 1);
}
soeDadu();

// 2. Parameter and Argument
    // NB : name is parameter and naran is argument
function greet(name){
    console.log(`Hy, ${name}!`)
}

let naran = prompt('Hatama Naran');
greet(naran);

// 3. Multiple Parameter and Argument
// NB : Bele tau kedas defaul Argument ba parametru ida idak, hodi nune bainhira funcion ne uja la kompleta nia Parameter mos nafatin lao diak
function soma(a=0, b=0){
    const c = a+b;
    console.log(`${a} + ${b} = ${c}`)
}
soma(3, 4)

// 4. Return
// NB: Kuandu iha ona Return, kodigu tuir mai sei la ejekuta ona 
function menus(a, b){
    if(typeof a !== 'number' || typeof b !== 'number') return false
    return a-b;
}

// Scope
let linux = 'Debian'
function distro(){
    let linux = 'Fedora'
    console.log(linux) // Fedora
}
console.log(linux) // Debian


// Block Scope Variable
// NB : let, const (Block Scope Variable) maibe Var lae
let aas = 10

if (aas > 5){
    let luan = 8
    console.log(luan) // Iha ne variable luan bele bolu 
}
// console.log(luan) // Maibe iha ne labele bolu valiable luan

let valor_a = 10
if (valor_a > 5){
    var valor_b = 8
}
console.log(valor_b) // Ida ne bele ona tamba ita deklara ita nia variavel refere ho var