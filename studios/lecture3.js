const input = require("readline-sync");
let str = "LaunchCode";

// let myBeginningSlice = str.slice(0, 3)
// let myEndingSlice = str.slice(3)
// let myFinalPigLatin = myEndingSlice + myBeginningSlice
//console.log(myFinalPigLatin)

// let myFinalPigLatin = `${myEndingSlice}${myBeginningSlice}`
// console.log(myFinalPigLatin)

// let userAnswer = input.question("How many letters should switch? ")
// userAnswer = Number(userAnswer)
//
// let myBeginningSlice = str.slice(0, userAnswer)
// let myEndingSlice = str.slice(3)
// let myFinalPigLatin = `${myEndingSlice}${myBeginningSlice}`
// console.log(myFinalPigLatin)

let userAnswer = input.question("How many letters should switch? ")
userAnswer = Number(userAnswer)
while (userAnswer >= str.length) {

    userAnswer = input.question("The string is only "+ str.length + " long. How many letters should switch? ")
}

let myBeginningSlice = str.slice(0, userAnswer)
let myEndingSlice = str.slice(3)
let myFinalPigLatin = `${myEndingSlice}${myBeginningSlice}`
console.log(myFinalPigLatin)
