// Primitive and non primitive

// Primitive -> call by value type of data, a copy is created; they are not referenced It is stored in stack 
// 7 types : string, number , boolean, null, undefined, Symbol, BigInt

const id1 = Symbol('123')
const id2 = Symbol('123')
console.log(id1 == id2) // false
console.log(id1 === id2) // false because symbol uniquely identifies

// Non-primitive /  reference type -> It is stored in heap

// Eg: Array, Objects, Functions

const heroes = ["Iron Man", 1, 2, 3, "SpiderMan"]

// objects are declared inside {} braces 
let myObj = {
    name: "Kaustav",
    age: 22,
}

// function 
// we can store functions in a variable as well. What Madness is this !
const myFunction = function () {
    console.log("Hello, World!")
}
console.log(typeof heroes) // object 
console.log(typeof myObj) // object 
console.log(typeof myFunction) // function object 


