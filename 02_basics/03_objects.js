// Object Literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Akash",
    "full name":"Akash Kumer",
    age: 21,
    [mySym] :"myKey1",
    location: "Delhi",
    email: "akash34@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday"]
}

console.log(JsUser.email)       // akash34@gmail.com
console.log(JsUser["email"])    // akash34@gmail.com

console.log(JsUser["full name"])    // Akash Kumer

console.log(typeof mySym)   // symbol
console.log(JsUser[mySym])  // myKey1

console.log(JsUser) //{ name: 'Akash', 'full name': 'Akash Kumer', age: 21,location: 'Delhi', email: 'akash34@gmail.com', isLoggedIn: false, lastLoginDays: [ 'Monday', 'Friday' ], [Symbol(key1)]: 'myKey1' }

JsUser.email = "akash121@gmail.com"

console.log(JsUser) //{ name: 'Akash', 'full name': 'Akash Kumer', age: 21,location: 'Delhi', email: 'akash121@gmail.com', isLoggedIn: false, lastLoginDays: [ 'Monday', 'Friday' ], [Symbol(key1)]: 'myKey1' }

// Object.freeze(JsUser)

JsUser.email = "akash723@gmail.com"

console.log(JsUser) //{ name: 'Akash', 'full name': 'Akash Kumer', age: 21,location: 'Delhi', email: 'akash121@gmail.com', isLoggedIn: false, lastLoginDays: [ 'Monday', 'Friday' ], [Symbol(key1)]: 'myKey1' }

JsUser.greeting = function(){
    console.log("hello!")
}

JsUser.greetingTwo = function(){
    console.log(`hello!!! JsUser ${this.name}`)
}

console.log(JsUser.greeting)    // [Function (anonymous)]
console.log(JsUser.greeting())  // hello!

console.log(JsUser.greetingTwo())  // hello!!! JsUser Akash