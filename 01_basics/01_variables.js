const accountId = 34332
let accountEmail = 'hiew@gamil.com'
var accountPassword = '97789'
accountCity = "Delhi" // A variable can assign without let,var,const but that is not a good practice
let useState //Without put any value, it's alaways undefined

// accountId = 11 //Not allowed

accountEmail = "jdi@gmail.com"
accountPassword = "56756"
accountCity = "Pune"

// Prefer not to use "var" beacause of issue in block scope and functional scope

console.table([accountEmail,accountPassword,accountCity,useState])
console.log(accountId)