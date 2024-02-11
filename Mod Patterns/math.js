// 1st Way

// function sum(a , b){
//     return a + b
// }

// function subtract(a, b){
//     return a - b
// }

// module.exports = { sum, subtract}  //es6 object literal 


// 2nd way //being added all at once 
module.exports.sum = function sum(a , b){
    return a + b
}

module.exports.subtract=function (a, b){
    return a - b
}

//3rd way

