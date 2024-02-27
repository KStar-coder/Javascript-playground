// We will try getters and setters first in class, then in functions and lastly, in objects
class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    // getters and setters 
    // Here, we use a different name _password (you can choose any name) so that we do not confuse it with the constructor in password to avoid stack oveflow
    get password() {
        return this._password.toUpperCase()
    }
    set password(value) {
        this._password = value
    }

    get email() {
        return this._email
    }
    set email(value) {
        this._email = value
    }
}

const kaustav = new User("kaustav@kaustav.ai", "123")
console.log(kaustav.password)

// a 'function' is a function as well as an object 

function Userfn(email, password) {
    this._email = email;
    this._password = password

    // overriding a property in function
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email = email
        },
        set: function (value) {
            this.email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password = password
        },
        set: function (value) {
            this._password = value
        }
    })
}

const chai = new Userfn("chai@chai.com", "chai")
console.log(chai.email)

// trying with objects now 

const coffee = {
    _email: 'coffee@code.com',
    _password: 'EatSleepCodeRepeat',

    // GETTERS AND SETTERS 
    get email() {
        return this._email
    },
    set email(value) {
        this._email = value
    }
}