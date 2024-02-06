const userEmail = ""
const subjects = []


// for email
if (userEmail) {
    console.log("User has an email")
}
else {
    console.log("User does not have an email")
}

// for subjects 
if (subjects) {
    console.log("User has subjects")
}
else {
    console.log("User does not have subjects ")
}

/*
O/P:
    User does not have an email
    User has subjects

    Here, empty string userEmail is considered false by the if statement
    but,  empty array subjects is considered true by the if statement

    falsy values :
    false
    0
    -0
    BigInt 0n
    null
    undefined
    NaN
    empty string

    truthy values:
    "0"// zero string
    'false' // non empty string
    ' '// space in a string gives true as the string is no longer empty
    []
    {}
    function (){} // empty function

*/

// How to check an empty object
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log('Object is empty')
}


// Nullish coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1)

val1 = null ?? 10
console.log(val1)

val1 = undefined ?? 15
console.log(val1)

val1 = null ?? 10 ?? 15
console.log(val1)

// ternary operator 

// condition ? true : false

let iceTea = 80
iceTea < 100 ? console.log("Less than 100") : console.log("More than 100")
