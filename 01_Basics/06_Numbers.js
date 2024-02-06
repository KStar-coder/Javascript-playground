const score = 400 // by default it is declared as number 
console.log(score)

// to specifically declare a number 
var num = new Number(200)
console.log(num)

// to convert it into a string and perform string operations like checking the length 
console.log(num.toString().length)
// to set precision for decimal 
console.log(num.toFixed(5)) // set precision upto 5 decimal place

// round off 
const otherNumber = 123.43299
console.log(otherNumber.toPrecision(6)) // 123.433 // the last digit has been rounded

// To automatically add commas to big numbers

const hundreds = 1000000000
console.log(hundreds.toLocaleString()) // local format (India in this case )
console.log(hundreds.toLocaleString('en-US')) // American format


// ++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

console.log(Math) // object [Math] {}

const dummy = 10.6
console.log(Math.ceil(dummy)) // 11
console.log(Math.round(dummy)) // 11
console.log(Math.floor(dummy)) // 10

// GENERATING RANDOM NUMBERS
console.log(Math.random() + 1) // +1 to print numbers in the range 1 followed by decimal
console.log(Math.floor(Math.random() * 10) + 1) // floor to avoid the decimal values


// GENERATING RANDOM NUMBERS IN A RANGE

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // printing random numbers in range [min, max]

