// Reduce contains an accumulator and the currenct value, It is used to perform math operations in less lines of code
// It is mostly used in shopping carts in websites 
let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let myTotal = myNums.reduce(function (acc, currval) {
    return acc + currval
}, 0) // Here, the accumulator is initialized with the value of 0

console.log(myTotal)

let shoppingCart = [
    {
        name: 'Javascript',
        price: 2999
    },
    {
        name: 'Mobile Dev',
        price: 5999
    },
    {
        name: 'Full Stack Development',
        price: 9999
    }
]

let priceToPay = shoppingCart.reduce((acc, currval) => acc + currval.price, 0) // here, 0 is the initial value of the acc
console.log(priceToPay)
let cartPrice = shoppingCart.reduce((acc, curr) => acc + curr.price, 0)
console.log(cartPrice)