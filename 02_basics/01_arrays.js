const myArr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman","Nagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1])   //1

myArr.push(6)
console.log(myArr)  //[0,1,2,3,4,5,6]
myArr.pop()         
console.log(myArr)  //[0,1,2,3,4,5]
myArr.unshift(10)         
console.log(myArr)  //[10,0,1,2,3,4,5]
myArr.shift()         
console.log(myArr)  //[0,1,2,3,4,5]

console.log(myArr.includes(2))  //true
console.log(myArr.includes(34))  //false

console.log(myArr.indexOf(2))  //2
console.log(myArr.indexOf(34))  //-1

const newArr = myArr.join()

console.log(myArr)  // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr) // 0,1,2,3,4,5
console.log(typeof newArr)  // string

//Slice & Splice
let nArray = [2,6,1,8,9]
console.log("Original: ",nArray)    //Original:  [ 2, 6, 1, 8, 9 ]

let nArray2 = nArray.slice(1,3)
console.log("Slice: ",nArray2)  //Slice:  [ 6, 1 ]
console.log("After slice: ",nArray) //After slice:  [ 2, 6, 1, 8, 9 ]

let nArray3 = nArray.splice(1,3)
console.log("Splice: ",nArray3) //Splice:  [ 6, 1, 8 ]
console.log("After slice: ",nArray) //After slice:  [ 2, 9 ]

