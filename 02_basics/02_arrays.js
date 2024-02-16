const marvel_heros = ["Thor", "SpiderMan", "IronMan"]
const dc_heros = ["SuperMan", "BatMan", "Flash"]

// marvel_heros.push(dc_heros)

console.log(marvel_heros)   // [ 'Thor', 'SpiderMan', 'IronMan', [ 'SuperMan', 'BatMan', 'Flash' ] ]

const allHeros = marvel_heros.concat(dc_heros)

console.log(allHeros)  // [ 'Thor', 'SpiderMan', 'IronMan', 'SuperMan', 'BatMan', 'Flash' ]

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)  // [ 'Thor', 'SpiderMan', 'IronMan', 'SuperMan', 'BatMan', 'Flash' ]

const multi_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const turn_single_element = multi_array.flat(Infinity)
console.log(turn_single_element)    // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("Akash")) // false
console.log(Array.from("Akash"))    // [ 'A', 'k', 'a', 's', 'h' ]

console.log(Array.from({name:"Akash"}))    // []        It's a interesting Case

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) // [100,200,300]
