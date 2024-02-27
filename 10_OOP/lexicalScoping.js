function outer() {
    let username = "Kaustav"
    function inner() {
        console.log("inner", username) // inner functions can access all variable of outer function
    }
    inner()
}

outer() 
