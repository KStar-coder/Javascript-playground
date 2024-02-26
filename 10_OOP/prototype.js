let myHeroes = ['thor', 'spiderman']

let heroPower = {
    thor: "Mjollnir",
    spiderman: "spiderSense",

    getSpiderPower: function () {
        console.log(`Spider Power is ${this.spiderman}`)
    }
}



// injecting your own property to an object so that it gets accessed everywhere
Object.prototype.kaustav = function () {
    console.log("Kaustav is present in all objects")
}
heroPower.kaustav() //Kaustav is present in all objects

myHeroes.kaustav() //Kaustav is present in all objects

/*
PROTOTYPE: 

function \
array     |- - -> Object - - -> null 
stirng   /

So we added our prototype in the highest authority i.e object

*/

// now, lets inject a prototype in array

Array.prototype.sayhi = function () {
    console.log("Hello, World!")
}
// heroPower.sayhi() // ERROR because we have only injected custom prototype in array 
myHeroes.sayhi() // Hello, World!


// injecting a custom prototype in a string
let myName = "Kaustav    "

console.log(myName.length) // 11 because of the extra spaces 

// now, we will create a custom prototype to find the true length of a string when spaces are given called truelength()
String.prototype.trueLength = function () {
    return this.trim().length
}
console.log(`The true length of the string is : ${myName.trueLength()}`)
console.log(`The true length of another string is : ${"Coffee     ".trueLength()}`)

