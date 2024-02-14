// Diferensia entre Function ho Method

// Example 1
function myFunc(){ // Ida ne Function babain
    console.log('Hy');
    return 'Hallo';
}

const HauNiaMath = { // Object
    mais: function(x, y){ // method
        return x + y;
    },
    menus: function(x, y){ // method
        return x - y;
    },
    vezes: function(x, y){ // method
        return x * y;
    },
    dividir: function(x, y){ // method
        return x / y
    }

}

console.log(HauNiaMath.dividir(12, 4));


// NB : -Method hanesan Function ida nebe define iha object ida nia laran


// Example 2 

// Function definition
function greet(name) {
    return "Hello, " + name + "!";
}

// Method definition within an object literal
var person = {
    name: "Fidel",
    sayHello: function() {
        return "Hello, " + this.name + "!";
    }
};

console.log(greet("Bob")); // Output: Hello, Bob!
console.log(person.sayHello()); // Output: Hello, Alice!
