// singleton objects 
// they are declared with the help of a constructor 

const bumbleUser = new Object()
bumbleUser.id = "19"
bumbleUser.name = "Rashi"
console.log(bumbleUser)

const regularUser = {
    email: "someone@gmail.com",

    // declaring object inside an object 
    fullName: {
        userFullName: {
            firstName: "Kalesh",
            lastName: "Mat Kar"

        }
    }

}
console.log(regularUser.fullName.userFullName.firstName)
// using conditions, if age is not present print not available 
console.log(regularUser.fullName.userFullName.age ? regularUser.fullName.userFullName.age : regularUser.fullName.userFullName.lastName)

// Merging objects 
const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'c', 4: 'd' }
const obj3 = { obj1, obj2 }
console.log(obj3) // here, we see that obj1 and obj2 are merged as objects inside obj3 
// to avoid this, we  use the assign function. It copies the values of obj1 and obj2 into the new object 

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)
// we can also use spread operator 
const obj5 = { ...obj1, ...obj2 }
console.log(obj5)

// multiple objects inside an array is useful for looping 
const objarr = [
    {
        id: 1,
        email: 'kaustav@meta.com'
    },
    {
        id: 2,
        email: 'rocky@boxing.com'
    }

]
console.log(objarr[0].email) // returns the email of the first object in the array

// getting info about objects 
console.log(Object.keys(bumbleUser)) // getting the keys in an array
console.log(Object.values(bumbleUser)) // gettinf the values in an array
console.log(Object.entries(bumbleUser)) // will return each key and value in separate arrays
console.log(bumbleUser.hasOwnProperty('isLoggedIn')) // returns true if a property exists else returns false


// **************Destructuring an object***********************

const course = {
    coursename: "Javascript Mastery",
    price: '999',
    courseInstructor: 'Adrian Hajdin'
}

const { courseInstructor } = course
console.log(courseInstructor)
const { courseInstructor: instructor } = course // we can use another shorter name for the longer keys if we wish
console.log(instructor)
