class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is : ${this.username}`)
    }

}

class Teacher extends User {
    constructor(username, email, password) {

        // super is used to set values via the constructor of the parent class
        super(username)

        this.username = username
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.addCourse()
chai.logMe()

const masalaChai = new User("masalaChai")

// to check if an object is an instance of a class 
console.log(chai instanceof Teacher) // true
console.log(chai instanceof User) // true

console.log(masalaChai instanceof Teacher) // false
console.log(masalaChai instanceof User) // true