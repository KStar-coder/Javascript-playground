// object literal 

const user = {
    username: "Kaustav",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log(`Username : ${this.username}`)
        console.log(this)
        /* OUTPUT of console.log(this)
        {
            username: 'Kaustav',
            loginCount: 8,
            signedIn: true,
            getUserDetails: [Function: getUserDetails]
        }
        */
    }
}

const user2 = {
    username: "Kaustav",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log(`Username : ${this.username}`)
        console.log(this)
        /* OUTPUT of console.log(this)
        {
            username: 'Kaustav',
            loginCount: 8,
            signedIn: true,
            getUserDetails: [Function: getUserDetails]
        }
        */
    }
}

// console.log(user['username'])
// console.log(user.getUserDetails())

// const promiseOne = new Promise()

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    // return this // even if we do not write this, it is returned by default when we use the new keyword while assigning the function to an object
}

const userOne = User("Kaustav", 12, true)
const userTwo = User("Javascript", 11, false)
console.log(userOne) // userTwo will override the values of userOne (Magic!)
// # To avoid this, we need to use the new word 
const userThree = new User("Coding", 99999, true)
console.log(userThree) // will simply print User { username: 'Coding', loginCount: 99999, isLoggedIn: true }
console.log(userThree.constructor) // will print [Function: User]


