class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was add by ${this.username}`);
  }
}

const user = new Teacher("Anil", "anil556@gmail.com", "76348");
user.addCourse();
user.logMe()

const user2 = new User("Supratim")
user2.logMe()

console.log(user instanceof Teacher)