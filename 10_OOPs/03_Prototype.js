let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spider power is ${this.spiderman}`);
  },
};

Object.prototype.sumit = function () {
  console.log("I am present in all objects");
};

Array.prototype.amitSay = function () {
  console.log("I am linked to array");
};
// heroPower.sumit();
myHeros.sumit();
myHeros.amitSay();
// heroPower.amitSay()

// Inheritance
const User = {
  name: "Punit",
  email: "punit23@gmail.com",
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let myName = "akash    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};
myName.trueLength();
"Somnath".trueLength();
"python".trueLength();
