const user = {
    username: "Akash",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

user.welcomeMessage()       //hitesh, welcome to website
user.username = "Shammy"
user.welcomeMessage()       //Shammy, welcome to website

console.log(this)   //{}

function chai() {
    let username = "Alok"
    console.log(this.username)  // undefined
    // console.log(this)
}

chai()

const chai2 = function () {
    let username = "som"
    console.log(this.username)   // undefined
}

chai2()

const chai3 = () => {
    let username = "som"
    console.log(this.username)   // undefined
}

chai3()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5, 32))   //37

//Implicit Returns
const addTwo2 = (num1, num2) => num1 + num2
console.log(addTwo2(5, 3)) //8

const addTwo3 = (num1, num2) => (num1 + num2)
console.log(addTwo3(5, 23)) //28

