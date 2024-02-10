// Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const city = 'Joypur' //String
const score = 80    //Number
const scoreValue = 78.98    //Number

const isLoggedIn = true //Boolean
const outsideTemp = null // Null --> object
let userEmail //undefined

const id = Symbol('123')    //Symbol
const anotherId = Symbol('123') //Symbol

console.log(id === anotherId)

const bigNumber = 784544342343248n    //BigInt

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["IronMan", "Thor", "BlackPanther", "DrStrange"]     //Array  --> object

let car = {
    name: 'Maruti',
    color: 'silver',
    wheel: '4'
}                   //Object

const myFunction = function () {
    console.log("Hello world!")
}                               //Function

console.log(
    [
        `city: ${typeof (city)}`,
        `score: ${typeof score}`,
        `scoreValue: ${typeof scoreValue}`,
        `isLoggedIn: ${typeof isLoggedIn}`,
        `outsideTemp: ${typeof outsideTemp}`,
        `userEmail: ${typeof userEmail}`,
        `id: ${typeof id}`,
        `anotherId: ${typeof anotherId}`,
        `bigNumber: ${typeof bigNumber}`,
        `heros: ${typeof heros}`,
        `car: ${typeof car}`,
        `myFunction: ${typeof myFunction}`
    ])