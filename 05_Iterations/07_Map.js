// map function
/*
In JavaScript, map() is a method of the Array object.
It creates a new array by calling a function on every element of the original array and 
storing the results in a new array
 */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = myNums.map((nums) => nums)
console.log(newNums) // returns the contents of myNums in the newNums variable in the form of an array

// CHAINING:  Adding 2 or more functions together one after the other in the same line using '.' operator
newNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNums)