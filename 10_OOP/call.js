// With call, we can write a method that can be passed on other objects 
// call passes the current execution context in some other function
function setUsername(username) {
    this.username = username
}

function createUser(username, email, password) {

    // context passing, passing this here, the 'this' in this case is the 'this' of the setUserName
    setUsername.call(this, username)// if we do not mention .call, then setUsername is not called. it is used to hold reference   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai)