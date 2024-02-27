// while loop

let index = 0;

while (index < 10) {
  console.log(`Value of index is ${index}`);    // 0, 2, 4, 6, 8
  index += 2;
}


let myArray = ['Flash', 'Batman', 'Superman', 'Ironman']

let i=0;
while(i<myArray.length){
    console.log(myArray[i])     // Flash Batman Superman Ironman
    i++;
}


// do-while loop

// let score = 1
let score = 11

do {
    // console.log(`Score is ${score}`)    // 1 2 3 4 5 6 7 8 9
    console.log(`Score is ${score}`)    // 11
    score++
} while (score<10);
