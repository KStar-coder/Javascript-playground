// for loop 
for (let index = 1; index <= 10; index++) {
    console.log(index)
}

let arr = ['flash', 'batman', 'superman', 'ironman', 'Green Goblin', 'Thomas Shelby']
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'Green Goblin')
        continue;
    console.log(arr[i])
}
