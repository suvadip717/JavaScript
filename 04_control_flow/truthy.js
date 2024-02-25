// const userEmail = "as@gmail.com"
const userEmail = [];

if (userEmail) {
  console.log("Got user email!");
} else {
  console.log("Don't have user email");
}

//************************** Falsy values ****************
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//*************************** Truthy value **************/
// "0", 'false', " ", [], {}, function(){},

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is emty!");
}

// false == 0  // true
// false == '' // true
// 0 == '' // true

// Nullish coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;

console.log(val1); // 5

let val2;
val2 = null ?? 20;

console.log(val2); //20

let val3;
val3 = undefined ?? 2;

console.log(val3);  //2

let val4;
val4 = undefined ?? 34 ?? 45;

console.log(val4);  //34

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80")