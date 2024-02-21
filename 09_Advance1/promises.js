// A promise is an object representing the eventual failure or completion of an asynchronous operation

const promiseOne = new Promise(function (resolve, reject) {

    // Do an async task 
    // DB calls, cryptography related, network related 

    setTimeout(function () {
        console.log('Async task is complete')
        // connecting resolve 
        resolve()
    }, 1000)
})

// .then is connected to resolve and gives a callback when the async function is resolved 
promiseOne.then(function () {
    console.log("Promise consumed after completing async task")
})

// creating one without initialising a variable
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Task 2")
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved")
})

// Passing values to .then()
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // passing values to .then 
        resolve({ username: "Kaustav Sharma", email: "sharmakaustav04@gmail.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user)
})

// error based checking
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "Kaustav", password: "123" })
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// avoiding callback hell
const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then(function (username) { // chaining : adding .then as much as we want; the new .then takes arguments that are returned by it's previous .then
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))


// using async and await
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ username: 'Kaustav', company: 'apple' })
        }
        else {
            reject('Error : Javascript went wrong')
        }
    }, 1000)
})

// accepting promise in a different way (async and await)// can't handle catch here 

async function consumePromiseFive() {
    // here, we need to use try catch block in place of .catch()
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log("Gracefully handled error")
    }

}

consumePromiseFive()

// fetching using async and await
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        // making response of type JSON because the data will come in string
        const data = await response.json() // we use await because this operation takes time and we need to wait for it else the program execution will end and not wait for it
        console.log(data)
    } catch (error) {
        console.log("E: ", error)
    }

}

getAllUsers()

// fetch using .then() and .catch()
// doing the same thing using .then() and .catch()
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))


/*
 #async function and await uses try catch blocks
 #without async and await, we use .then() and .catch()
*/

