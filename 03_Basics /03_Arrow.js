const user = {
    username: "Kaustav",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website!`);
        console.log(this) // will print the user object layout 
    }
    // console.log(this) // will give the error: SyntaxError: Unexpected identifier

}

user.welcomeMessage()
user.username = "Maddy"
user.welcomeMessage()

console.log(this) // prints empty {}

chai()
function chai() {
    console.log(this) // prints a lot of unknown things
}

function coffee() {
    let name = "Mickey Mouse"
    console.log(this.name) // this time it will pring undefined.. This can't be used directly in a function
    // it can only be used inside an object 
}
chai()
coffee()


// arrow functions  () => {}
const laptop = () => {
    console.log("Windows sucks")
}
laptop()

// implicit return in arrow function: 
// If we use (), we do not need to write the return keyword. This is called implicit return.
// If we use {}, we need to specifically write the return keyword. This is called explicit return 

const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(2, 3))

const addTwo2 = (num1, num2) => { return num1 + num2 }
console.log(addTwo2(2, 3))

// returning objects in arrow functions
const weird = () => ({ username: "Kaustav" }) // we have to use () and then inside that {} like ({}) for returning objects

console.log(weird())







// global object inside the browser = window (asked in interview)

