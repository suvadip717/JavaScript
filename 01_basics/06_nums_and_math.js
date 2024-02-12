//*************************** Numbers *********************************/
const score = 400
console.log(score)  //400

const balance = new Number(100)
console.log(balance)    // [Number: 100]

console.log(balance.toString().length)  // 3
console.log(balance.toFixed(2)) //100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(5)) //123.90

const hundred = 1000000
console.log(hundred.toLocaleString())   // 1,000,000
console.log(hundred.toLocaleString('en-IN'))   // 10,00,000

//************************************* Maths ************************************** */

console.log(Math)   // Object [Math] {}
console.log(Math.abs(-4))   // 4
console.log(Math.round(4.2)) // 4
console.log(Math.round(4.7)) // 5
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.9)) // 4
console.log(Math.min(4,5,6,8,2,7)) // 2
console.log(Math.max(4,5,6,8,2,7)) // 8

console.log(Math.random()) // random value (0-1)

console.log((Math.random()*10)+1)   //random value (1-11)

console.log(Math.floor(Math.random()*10)+1)   // random value(1-10) decimal

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+10) // random value(10-20)