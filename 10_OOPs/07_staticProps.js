class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static creatId(){
        let id = Math.ceil(Math.random()*10)
        return id
    }
}

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const ajoy = new User("Ajoy Maity")
// console.log(ajoy.creatId())

const user = new Teacher('Somnath','somnath34@gmail.com')
user.logMe()