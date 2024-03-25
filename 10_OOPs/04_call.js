function setUsername(username) {
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  setUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const user = new createUser("Sukumer", "sukumer343@gmail.com", "8734");
console.log(user);
