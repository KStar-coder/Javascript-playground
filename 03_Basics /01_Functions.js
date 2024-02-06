function sayHi(name) {
    console.log(`Hi ${name}`)
}
sayHi // reference 
sayHi("Kaustav") // execution

function addTwo(num1, num2) {
    let result = num1 + num2
    return result
}

let result = addTwo(2, 2)
console.log(result)


function loginUserMessage(username) {
    if (username === undefined) {
        console.log('Please enter the user name')
        return
    }

    return `${username} Just logged in`


}
console.log(loginUserMessage("Kaustav"))
console.log(loginUserMessage()) // O/P: undefined just logged in

function loginUserMessage2(username = 'Sam')  // Passed a default value in case no other value is passed by the user
{
    return `${username} Just logged in`
}

console.log(loginUserMessage2())


// when we do not know how many parameters the function can have, we use the ... operator. It is called 'rest operator' in this case 
function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(400, 500, 600)) // returns an array of these values 

function calculateCartPrice2(num1, num2, ...num3) {
    return num3
}
console.log(calculateCartPrice2(400, 500, 600)) // only 600 will be printed as num1 and num2 has 400 and 500 which we are not returning


// handling objects with functions 
let userDetails = {
    userName: "Kaustav",
    age: 21
}
function handleObject(anyObject) {
    console.log(`name is ${anyObject.userName} and age is ${anyObject.age}`)
}
handleObject(userDetails)

// passing the object directly in the arguments 
handleObject({
    userName: "Kaustav", age: 21
})


// Similarly we can get arrays inside a function as well
const newarr = [200, 400, 100, 600]

function returnSecondValue(getarr) {
    return getarr[1]
}
console.log(returnSecondValue(newarr))
console.log(returnSecondValue([1, 2, 3, 4, 5]))// we can pass values as well inside the function call




