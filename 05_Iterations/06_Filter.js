let coding = ['javascript', 'ruby', 'java', 'python', 'cpp']

// storing values from for each 
const values = coding.forEach((item) => {
    console.log(item)
    return item
})
console.log(values) // will return undefined as 'forEach' loop does not return any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/***********************filter in javascript *****************************/

/*
The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, 
and constructs a new array of all the values for which callbackFn returns a truthy value. 
Array elements which do not pass the callbackFn test are not included in the new array.
It is used to filter elements according to a condition
*/
let newNums = myNums.filter((num) => {
    return num > 4
}
)
console.log(newNums)