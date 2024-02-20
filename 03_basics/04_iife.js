// Immediately Invoked Functiono Expressions (IIFE)

(function chai() {
    // Named IIFE
    console.log("DB connected")
})();       //DB connected
// chai()   //DB connected

(() => {
    console.log("Chai or Code")     //Chai or Code
})();

((name) => {
    console.log(`Name is: ${name}`)
})("Akash")                         //Name is: Akash