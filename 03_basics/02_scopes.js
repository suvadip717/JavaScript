// Scope {}

let a = 300

if (true) {
    let a = 20
    const b = 30
    var c = 50

    console.log("Inner: ", a)    // Inner:  20
}

console.log(a)  // 300
// console.log(b) // b is not defined
console.log(c) // 50

// Nested Scope
function one() {
    const username = "Akash"

    function two() {
        const website = "youtube"
        console.log(username)   // Akash
    }
    // console.log(website)     // website is not defined
    two()
}

one()

// Nested Scope in if-else

if (true) {
    const username = "Akash"
    if (username === "Akash") {
        const website = " YouTube"
        console.log(username + website)   // Akash YouTube
    }
    // console.log(website)    // website is not defined
}
// console.log(username)   // username is not defined


//************************************************** Interesting ******************************************** */

console.log(addOne(5))  //6
function addOne(num) {
    return num + 1
}

// addTwo(7)       // Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2
}
console.log(addTwo(7))  // 9
