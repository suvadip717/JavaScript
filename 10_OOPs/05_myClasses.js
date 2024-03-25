// Class

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}bas`;
  }

  changeUserName() {
    return `${this.username.toLowerCase()}`;
  }
}

const user = new User("Sujan", "sujan342@gmail.com", "12344");
console.log(user.encryptPassword());
console.log(user.changeUserName());

// Behind the scene
function User2(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User2.prototype.encryptPassword = function () {
  return `${this.password}bas23`;
};
User2.prototype.changeUserName = function () {
  return `${this.username.toLowerCase()}`;
};

const user2 = new User2("Sumit", "sumit342@gmail.com", "12344");
console.log(user2.encryptPassword());
console.log(user2.changeUserName());
