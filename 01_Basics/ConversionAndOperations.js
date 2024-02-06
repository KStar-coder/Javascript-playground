let score = null
console.log(typeof score)

let valueInNumber = Number(score) // converting the string to number 
console.log(typeof valueInNumber)
console.log(valueInNumber)


// When converting a numeric string say '33' to number, it's type will be number 
// When converting an alpha numeric string say '33abc' to number, it's type will be NaN (Not a number) but it will be converted to number in the code
// When a value is assigned null, it's type is object and when converted to number, it's type becomes number 
// When a value is assigned undefined, it's type is undefined, and when converted to number, it's type is number


// for boolean types 
let isLoggedIn = 1
console.log(isLoggedIn)

let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn)

// here, it is converted

// if we write our name and convert it to boolean, it outputs true
// But if we convert an empty string to boolean, it outputs to false

/*********OPERATIONS************* */
let value = 3;
let negValue = -value;
console.log(negValue)


// string concatination
let str1 = "Hello,"
let str2 = " World!"
let str3 = str1 + str2
console.log(str3)


// weird stuff
console.log("SOME WEIRD STUFF")
console.log("1" + 2 + 2) // prints 122
console.log(1 + 2 + "2") // prints 32!

console.log(true) // prints true
console.log(+true) // prints 1
// console.log(true+) // will give error


// == -> checks the value   ; === -> checks the value as well as the datatype.. It is called strict check

