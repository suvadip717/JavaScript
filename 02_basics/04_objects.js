// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammi"
tinderUser.isLoggedIn = false


console.log(typeof tinderUser)  // object
console.log(tinderUser)     // { id: '123abc', name: 'Sammi', isLoggedIn: false }

const regularUser = {
    email: "sammy342@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Akash",
            lastName: "Kumer"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName)    //Akash

const obj1 = {
    city: "Kolkata",
    state: "West Bengal",
    dist: "Howrha"
}
const obj2 = {
    city: "Chaibasa",
    state: "Jharkhand"
}

const obj3 = { obj1, obj2 }
console.log(obj3)   // { obj1: { city: 'Kolkata', state: 'West Bengal' }, obj2: { city: 'Chaibasa', state: 'Jharkhand' } }

const obj4 = Object.assign(obj1,obj2)
console.log(obj4)   //  { city: 'Chaibasa', state: 'Jharkhand', dist: 'Howrha' }

const obj5 = {...obj1,...obj2}
console.log(obj5)   //  { city: 'Chaibasa', state: 'Jharkhand', dist: 'Howrha' }

const User = [
    {
        id: 1,
        email: "dffde@gmail.com"
    },
    {
        id: 2,
        email: "dfge@gmail.com"
    },
    {
        id: 3,
        email: "dfes@gmail.com"
    },
    {
        id: 4,
        email: "dfwe@gmail.com"
    },
]

console.log(User[2].email)  //dfes@gmail.com

console.log(Object.keys(tinderUser))    // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))  // [ '123abc', 'Sammi', false ]
console.log(Object.entries(tinderUser))  // [ [ 'id', '123abc' ], [ 'name', 'Sammi' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty("isLoggedIn"))    //true