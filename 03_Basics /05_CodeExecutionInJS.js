// How code is executed in javascript

/**
 * 1) Javascript execution context 
 * 
 *      When we create a file with JS code in it, the first thing that is made is the Global Execution Context
 *      It is referred to using the this keyword. 
 *      In browser, the value of this is the 'Window Object'
 *      This is executed in a thread. Javascript is single threaded 
 *      
 *      1) Global Execution Context 
 *      2) Function Execution Context 
 *      3) EVAL Execution Context
 * 
 *      
 *      -> JS code runs in 2 phases 
 *         1) Memory Execution Phase  -> memory is allocated for our variables 
 *         2) Execution Phase  -> code logic like add subtract etc is carried out
 */
let val1 = 10
let val2 = 5

const addNum = (num1, num2) => (num1 + num2)
console.log(addNum(val1, val2))
console.log(addNum(1, 2))

/*
How the code is executed : 
    1) Global Execution -> allocated under this 
    2) Memory creation Phase -> All variables are collected and undefined is stored under them. Here, 
        val1 and val2 is assigned undefined 
        addNum = function defination is assigned here 
        result1 = undefined
        result2 = undefined
    3) Execution Phase  
        Here, the values are assigned to their variables 
        val1 <--- 10
        val2 <--- 5
                addNum -> THIS WILL CREATE ANOTHER EXECUTION CONTEXT LIKE STEP 1 
                NUM1 AND NUM2 INSIDE THE FUNCTION ARE  ASSIGNED TO UNDEFINED
                num1 and num2 are assigned values in the execution phase 
                Now the execution context is deleted and the sum is returned in the global execution context
                
                
*/
