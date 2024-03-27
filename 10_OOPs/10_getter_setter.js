class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}sushil`
    }

    set password(value){
        this._password = value
    }
}

const ajoy = new User("ajoy45@gmail.com", "asdsfs")
console.log(ajoy.password)
console.log(ajoy.email)