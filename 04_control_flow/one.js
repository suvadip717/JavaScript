// if
const isUserloggedIn = true;

if (isUserloggedIn) {
  console.log("executed"); //executed
}

// <,>,<=,>=,==,!=, ===, ===, !==

const temperature = 41;
if (temperature === 4) {
  console.log("less than 50");
} else {
  console.log("temperature is less than 50"); // temperature is less than 50
}

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`User power: ${power}`); // User power: fly
}

// console.log(`User power: ${power}`)  // power is not defined

const balance = 1000;

if (balance > 500) console.log("test"), // test
console.log("test2");   //test2

if(balance<500){
    console.log("balance is less then 500")
}else if(balance<750){
    console.log("balance is less then 750")
}else if(balance<900){
    console.log("balance is less then 900")
}else{
    console.log("balance is less then 1200")    // balance is less then 1200
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console .log("Allow to buy course")     // Allow to buy course
}
if(userLoggedIn && debitCard && 2==3){
    console .log("Allow to buy course")     
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in")
}