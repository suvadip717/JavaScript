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


//************************** Operation ********************************

let value = 3
let negvalue = -value

// console.log(negvalue) // -3

// console.log(2+2) // 4
// console.log(2-2) // 0
// console.log(2*5) // 10
// console.log(2/2) // 1
// console.log(7%2) // 1

let str1 = "Good"
let str2 = " Morning"

let str3 = str1 + str2
console.log(str3)

console.log("1"+2) // 12
console.log(1+"2") // 12
console.log(1+"2"+2) // 122
console.log(1+2+"2") // 32

console.log(3+4*5%3) // 5

console.log(+true) // 1
console.log(+"") // 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
// ++gameCounter
gameCounter++
console.log(gameCounter) // 101