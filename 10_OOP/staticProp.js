// prop is nothing but property

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }

    // stops this accessing this property by adding static 
    static createId() {
        return `123`
    }
}

const chai = new User("chai")
// console.log(chai.createId()) // error

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}