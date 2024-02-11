//1st and 2nd

//const {sum, subtract} = require("./math.js")

//console.log(sum(20, 10))

//3rd way

// const sum = require("./math.js").subtract

// console.log(sum(20,10))

//reavealing mod pattern

const sum = require("./math.js")

const {multiply, setFactor} = require('./math2.js')

const User = require('./user.js')

console.log(multiply(10))

setFactor(10)

console.log(multiply(10))

// console.log(new User("steve", 10))
// console.log(new User("Matt", 30))
console.log(new User("BJ", 26, true))