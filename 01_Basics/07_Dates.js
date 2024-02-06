let myDate = new Date()
console.log(myDate.toString())      // Thu Dec 28 2023 23:04:48 GMT+0530 (India Standard Time)
console.log(myDate.toISOString())   // 2023-12-28T17:34:48.152Z
console.log(myDate.toJSON())        // 2023-12-28T17:34:48.152Z
console.log(myDate.toLocaleDateString()) // 28/12/2023
console.log(myDate.toDateString())  //Thu Dec 28 2023 
console.log(typeof myDate) // object 

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()) // Mon Jan 23 2023. In JS, Month starts from 0. Jan = 0, feb = 1 ....

// **** Timestamps in date ********** // used to design quizzes and polls

let myTimestamp = Date.now()

console.log(myTimestamp) // milliseconds passed since 1st Jan 1970


// converting the milliseconds to seconds 
console.log(Math.floor(Date.now() / 1000))

// to find specific values from dates
let newDate = new Date()
console.log(newDate.getDay())
console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`)

// internationalization and customizing the format
newDate.toLocaleString('default', { // default means default internationalizing
    weekday: "long"
})
