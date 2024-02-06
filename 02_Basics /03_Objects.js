// Singleton
// Object.create
// declating singleton objects: 
const metaDev = new Object()

// object literals
// declaring non singleton object 
const metaVerseUser = {}

const mySymbol = Symbol("key1")

const JsUser = {
    name: 'Kaustav',
    'Full name': 'Kaustav Sharma',
    [mySymbol]: "myKey", // a symbol should always be declared within [ ] else it is treated like a string
    age: 12,
    email: 'kaustav@meta.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}

// accessing objects 
console.log(JsUser.age);
console.log(JsUser['age']); // when passing via braces, it should always be passed as string

// when accessing a key with more than one word, we cannot use the . 

// console.log(JsUser.Full name) Incorrect 
console.log(JsUser["Full name"]) // correct way
console.log(JsUser[mySymbol]) // a symbol cannot be used with a . operator 
console.log(typeof JsUser[mySymbol])

// changing the values of the object 
JsUser.isLoggedIn = true;
console.log(JsUser)

// in order to lock the object from creating any changes 
// Object.freeze(JsUser)
// JsUser.age = 22
// console.log(JsUser) // the age will not be changed as it has been freezed 

// In javascript we can treat functions as variables as well, and pass them on objects and other functions
JsUser.greeting = function () {
    console.log(`Hello ${JsUser['name']}`)
}
JsUser.greeting()