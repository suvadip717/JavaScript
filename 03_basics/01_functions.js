function sayMyName(){
    console.log("A")
    console.log("K")
    console.log("A")
    console.log("S")
    console.log("H")
}

sayMyName   //Get Nothing
sayMyName() // execute code

function addTowNumber(number1,number2){
    console.log(number1+number2)
}

addTowNumber(8,'2')   //82
addTowNumber(8,'b')   //8b
addTowNumber(8,null)   //8
addTowNumber(8,2)   //10
const result = addTowNumber(43,21)  //64
console.log(result) //undefined

function addNumbers(number1,number2){
    let result = number1+number2
    return result
}

function sumNumber(number1,number2){
    return number1+number2
}

let sumNumbers = sumNumber(7,7)
console.log(sumNumbers) //14

function logInUser(user){
    if(user === undefined){
        console.log('Please enter a user name')
        return
    }
    return `${user} just LogIn`
}

console.log(logInUser('Akash')) //Akash just LogIn
console.log(logInUser('')) // just LogIn
console.log(logInUser()) //Please enter a user name    undefined


function LogUser(user='Somnath'){
    return user;
}

console.log(LogUser('Satish'))  //Satish
console.log(LogUser())  //Somnath