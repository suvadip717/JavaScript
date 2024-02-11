const name = "Rajat"
const repocont = 45

// console.log(name + repocont)

console.log(`Hello my name is ${name} and my repo count is ${repocont}`)

const gameName = new String('AjoyKumer')

console.log(gameName[2]) // o
console.log(gameName.__proto__) //{}

console.log(gameName.length) // 9
console.log(gameName.toUpperCase()) // AJOYKUMER
console.log(gameName.toLowerCase()) // ajoykumer
console.log(gameName.charAt(5)) // u
console.log(gameName.indexOf('m')) // 6

const newString = gameName.substring(0,4)
console.log(newString)  //Ajoy

const anotherString = gameName.slice(-8,4)
console.log(anotherString) //joy

const newStringOne = "   Ajoy   "
console.log(newStringOne)   //   Ajoy   
console.log(newStringOne.trim()) //Ajoy

const url = "https://amazon.com/web%20service" 

console.log(url.replace('%20','_'))  //https://amazon.com/web_service

console.log(url.includes('amazon')) //true

console.log(url.split('.')) // [ 'https://amazon', 'com/web%20service' ]
