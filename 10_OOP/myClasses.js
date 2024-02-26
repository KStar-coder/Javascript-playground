class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }

}
const chai = new User("chai", "chai@meta.com", "123")
console.log(chai.encryptPassword()) // 123abc
console.log(chai.changeUsername()) 