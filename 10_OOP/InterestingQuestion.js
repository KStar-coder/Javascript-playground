// Javascript by default has pi value as 3.14 in math.pi; Can you change it to 4? How ?
console.log(Math.PI)

// to know about the hidden features of an object
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI') // knowing the description of 'PI' in Math.PI

console.log(descriptor)
// O/P : 
/*                               
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}

As we can see, the value of PI is not writable. enumerable or configurable. So, we cannot change it
*/

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(chai)

// getting the property description of out self made object chai 
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

/* O/P :
{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// defining our own properties 
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

/*
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,
  configurable: true
}
*/




