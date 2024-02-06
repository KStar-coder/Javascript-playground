// array declaration 

const myArr = [0, 1, 2, 3, true, 'Kaustav']
console.log(myArr[5])
let myHeroes = ['IronMan', 'SpiderMan', 'BlackPanther', 'Flash']
console.log(myHeroes)

// some in built array functions
myArr.push(6) // push back / append
console.log(myArr)

myArr.pop() //  removes the last element 
console.log(myArr)

// inserting at the first index -> O(n)
myArr.unshift('Sharma')
console.log(myArr)

// removing at the first index 
myArr.shift()
console.log(myArr)

// To check if an element is present in the array or not 
console.log(myArr.includes('Kaustav')) // returns True

// to find the index of an element in the array 
console.log(myArr.indexOf('Kaustav')) // prints the index, if not present it prints -1

// joining  arrays 
myHeroes = myArr.join()
console.log(myArr) // prints myArr
console.log(myHeroes) // prints myHeroes followed by myArr elements as it is joined now 
// # after joining, myHeroes no longer remains an array. It is changed to a string now

console.log(typeof myHeroes) // string 


// ********** slice vs splice *************

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr.slice(2)) // prints all the elemtnts till end starting from index 2
console.log(arr.slice(2, 6)) // prints all the elements from index 2 till the (6-1)th index
console.log(arr.splice(2, 6)) // prints all the elements from index 2 till the 6th      index but removes them from the original array

console.log(arr) // removed elements from 2nd till 6th index by the splice function above
