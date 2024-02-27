// for Of

// ["", "", ""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr){
    console.log(num)    // 1 2 3 4 5 
}

const greeting = "Welcome to my code"

for (const greet of greeting) {
    console.log(greet)
}

// Map

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fe',"France")
map.set('IN',"India")

console.log(map)
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fe' => 'France'
//   }

for (const [key,value] of map){
    console.log(key,':-',value)
}

/*
IN :- India
USA :- United States of America
Fe :- France
*/

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for(const [key,value] of myObject){
    console.log(key,':-',value)         // myObject is not iterable
}