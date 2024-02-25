// For

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best number") // 5 is best number
    }
    console.log(element)
}

for(let i = 1; i<=10; i++){
    // console.log(`Outer loop value of i: ${i}`)
    console.log(`Table of: ${i}`)
    for(let j=1; j<=10; j++){
        // console.log(`Inner loop value of i: ${i} and j: ${j}`)
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

let myArray = ["Superman","Flash","Batman","Spyderman"]
console.log(myArray.length)
for (let index = 0; index < myArray.length; index++) {
    const hero = myArray[index];
    console.log(hero)
}

for(i=1; i<20; i++){
    if(i==5){
        console.log("Detected number 5")    
        continue                            // skip number 5
    }
    if(i==15){
        console.log("Detected number 15")
        break                               // brek point 15 and then out of scope 
    }
    console.log("Number is:",i)
}