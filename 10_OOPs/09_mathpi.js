const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter)

const chai = {
  name: "Ginger Chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("Chai nhi bani");
  },
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,            // check what is the output when "enumerable: true"
});

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {            // replace 'Math' at the position 'chai'
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)
