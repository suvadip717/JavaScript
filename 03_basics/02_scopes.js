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