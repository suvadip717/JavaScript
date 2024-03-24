const user = {
  username: "Ashim",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database")
    // console.log(`Username is: ${this.username}`)
    console.log(this);
  },
};

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username, loginCount, isLooggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLooggedIn = isLooggedIn;
  this.greeting = function(){
    console.log(`Welcome ${this.username}`)
  }

  return this;
}

const userOne = new User("Sanker", 32, true);
const userTwo = new User("Sumit", 4, false);

console.log(userOne.constructor);
console.log(userTwo);
