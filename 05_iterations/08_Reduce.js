const myNum = [1, 2, 3];

let myTotal = myNum.reduce(function (accum, curr) {
  console.log(`accum: ${accum} and curren: ${curr}`);
  return accum + curr;
}, 0);
/*
accum: 0 and curren: 1
accum: 1 and curren: 2
accum: 3 and curren: 3
*/
console.log(myTotal); // 6

myTotal = myNum.reduce((accum, curr) => accum + curr, 20);
console.log(myTotal); // 26

const shoppingCart = [
  {
    itemName: "Js cource",
    price: 999,
  },
  {
    itemName: "Java cource",
    price: 2999,
  },
  {
    itemName: "Web dev cource",
    price: 5499,
  },
  {
    itemName: "Py cource",
    price: 3999,
  },
];

// const totalShoppingPrice = shoppingCart.map((item) => item.price).reduce((acum, curr) => acum + curr, 0); //13496

const totalShoppingPrice = shoppingCart.reduce((acum, item) => acum + item.price,0);  // 13496
console.log(totalShoppingPrice);
