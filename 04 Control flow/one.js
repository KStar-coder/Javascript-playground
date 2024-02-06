// if statement 

const score = 200
let power = 'walk'
if (score >= 200) {
    power = 'fly'
}
console.log(`My power is ${power}`)


// shorthand notation 
const balance = 500

if (balance >= 500)
    console.log("test")

// switch case 
const month = 3
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
    default:
        console.log("Value did not match the month. You can enter another number")
}
