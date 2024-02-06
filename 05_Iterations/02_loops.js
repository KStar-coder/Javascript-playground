// while loop
let index = 1
while (index <= 10) {
    console.log(`Value of index is ${index}`)
    index = index * 2
}

let myArr = [1, 2, 3, 4, 5, 6, 7, 8]
let j = 0
while (j < myArr.length) {
    console.log(`Value is: ${myArr[j]}`)
    j++
}

// do while loop
// This loop will run at least once irrespective of the termination condition
let score = 0;
do {
    score++;
    console.log(score)

} while (score < 10)

//******* Higher Order Loops  *******/
console.log("Higher order loops")
const arr = [1, 2, 3, 4, 5]

// for of loop (shortcut loop )
for (const val of arr) { // we can apply this in strings as well
    console.log(val)
}
for (const val in arr) { // for in loop will print the indices of the loop and not it's elements
    console.log(val) // will print the indices of the loop and not the elements 
}

let ss = 'greeetings mf'
for (const val of ss) {

    // To avoid printing the space  
    if (val == ' ')
        continue
    else
        console.log(val)
}

// Maps in Javascript
let map = new Map()
map.set('IN', 'India')
map.set('US', 'United States of America')


for (let it of map) {
    console.log(it) // prints in the form of array 
}

// to print it nicely without the array form
for (const [it, val] of map) {
    console.log(it, " : ", val)
}

// 'for in' LOOP CANNOT BE USED IN OBJECTS 

/// OBJECTS 
const lang = {
    js: 'Javascript',
    cpp: 'C++',
    swift: 'swift by apple'
}
// to iterate objects, we use the 'for in' loop 
for (let key in lang) {
    console.log(key) // will print the keys 

    // In for in loop, when we console like this, only the keys are printed.

}
// to print the key:value pair 
for (let key in lang) {
    console.log(`${key} : ${lang[key]}`)
}

// Map() is not iteratable in 'for in' loop

// **********************'for each' loop in array *********************

/*
    In 'for each' loop, the functions does not have any name as it is a callback function
*/

const coding = ['cpp', 'js', 'python', 'java']

coding.forEach(function (val) {
    console.log(val)
})

// arrow function style 
coding.forEach((val) => {
    console.log(val)
})

// Passing functions inside the for each 
let printMe = (obj) => {
    console.log(obj)
}

coding.forEach(printMe) // here we do not use () while calling the function as we only need the reference of it.


// printing some more items inside the for each 

// Here, item (1st parameter) will take the value,
//'i' (2nd parameter) will take the reference of index , 
//arr (3rd parameter) will take the entire coding array as reference
coding.forEach((item, i, arr) => {
    console.log(item, i, arr)
})

// In databases, data comes in the form of array of objects so we need to learn how to loop it
// We can loop it using for each loop
// Array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: 'js'
    },

    {
        languageName: "java",
        languageFileName: 'java'
    },

    {
        languageName: "python",
        languageFileName: 'py'
    }
]
// iterating it : 
myCoding.forEach((item) => {
    console.log(item.languageName)
    console.log(item.languageFileName)
})