const name = "kaustav"
const rank = "knight"

console.log(name + " " + rank + " in leetcode")

// backticks (``) -> string interpolation
console.log(`Hello, My name is ${name} and my wannabe leetcode rank is ${rank}`)

console.log(name[0]) // string has inbuilt indices like C++

console.log(name.__proto__) // To see objects

// another way to declare string variables 

const platformName = new String('Leetcode') // constructor method 

console.log(platformName) // O/P [String: 'Leetcode']

console.log(`The platfrom I use is ${platformName}`) // normal output like before 

console.log(platformName.toUpperCase())// converting string to uppercase 

console.log(platformName) // original value is not changed

// to find the character at any position of the string 
console.log(platformName.charAt('3'))

// to find the position of a character 
console.log(platformName.indexOf('e')) // multiple 'e's are there so it will return the position of the first 'e'

// slicing 
const newString = new String(platformName.substring(0, 4))
console.log(newString)
const anotherString = name.slice(-7, -7)
console.log(anotherString)


// To remove unnecessary spaces before a character starts and after it ends 
const userName = "    Rohit   Agarwal  "
console.log(userName)// prints the original string
console.log(userName.trim()) // removes the extra space before Rohit and after Agarwal
console.log(userName) // prints the original string


// replace function 
const url = "https://Apple.com/kaustav%20Sharma"
console.log(url.replace('kaustav', 'Kash')) // https://Apple.com/Kash%20Sharma
console.log(url) // original url








