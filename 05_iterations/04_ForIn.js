const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    py: "Python",
    kt: "Kotlin"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}

/*
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
py shortcut is for Python
kt shortcut is for Kotlin
*/

const programming = ["c","c++","js","py","kt"]

for (const key in programming) {
    // console.log(key)                // 0 1 2 3 4
    console.log(programming[key])                // c c++ js py kt
}

/*      Map  and  For_In loop
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fe',"France")
map.set('IN',"India")

for (const key in map) {                // map is not iterable
   console.log(key)
}

*/