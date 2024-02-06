function one() {
    const user = "Kaustav"


    // nested function 
    function two() {
        const tech = "react"
        console.log(user)
    }
    // console.log(tech) //will throw error
    // two()
}
one()


// mini hoisting 
console.log(addOne(1))
function addOne(num1) {
    return num1 + 1
}

// console.log(addTwo(1)) // this will throw an error as we cannot access a function made in a variable before it is declared
const addTwo = function (num1) {
    return num1 + 2
}