// let score = 33
// let score = "33"
// let score = "33abh"
// let score = null
// let score = undefined
// let score = true
let score = false

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);


// "33" => 33
// "33addk" => NaN(Not a Number)
// true => 1; false => 0;
// null => 0;
// undefined => NaN

// let isLoggedIn = 1     // true
// let isLoggedIn = 0     // false
// let isLoggedIn = 122   // true
// let isLoggedIn = ""    //false
// let isLoggedIn = "Akash" // true
let isLoggedIn = null       // false


let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
//"Akash" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
