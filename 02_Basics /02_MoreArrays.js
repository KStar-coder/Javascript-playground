const marvelHeroes = ['Thor', 'IronMan', 'SpideraMan']
const dcHeroes = ['Flash', 'Batman', 'Superman']

console.log(marvelHeroes)
console.log(dcHeroes)

// marvelHeroes.push(dcHeroes) // will push the entire array of dcHeroes into marvel heroes 
console.log(marvelHeroes) // it will become a 2d array where dc heroes will be appended 
//like an array inside the already existing marvel heroes array 

// Inorder to not push the array and only push its contents, 
let allHeroes = marvelHeroes.concat(dcHeroes)
console.log(allHeroes) // now the elements of the 2nd array are added without adding the second array as a whole 

// Another amazing way which is often used in React 

let allNewHeroes = [...marvelHeroes, ...dcHeroes] // This is known as spreading 
console.log(allNewHeroes)


// Way of handling multidimensional arrays 
const khitchdi = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10, 11, [12, 13, [14, 15]]]]
const khitchdiResolved = khitchdi.flat(Infinity)// we need to specify the depth.. if we don't know the depth, we can say Infinity
console.log(khitchdiResolved)// returns a 1d array with all the elemnts of khitchdi


// While scraping data and all from the web, we often come across data that we need. 
// We would need this in the form of arrays so we will have to convert them to arrays. 
// We can do that as follows:

console.log(Array.isArray("Kaustav")) // false 
console.log(Array.from("Kaustav")) // [ 'K', 'a', 'u','s', 't', 'a','v'] // will convert the string to an array
console.log(Array.from({ name: "Kaustav" })) // will give an empty array and we need to specify on what basis we want the elements inside this array

// getting multiple variables inside an array 
const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3)) // returns a set of elements from a new array

