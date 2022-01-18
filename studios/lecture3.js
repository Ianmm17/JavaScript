const input = require("readline-sync");
let str = "LaunchCode";


let userAnswer = input.question("How many letters should switch? ")
userAnswer = Number(userAnswer)
while (userAnswer >= str.length) {
    userAnswer = input.question("The string is only "+ str.length + " long. How many letters should switch? ")
}

let myBeginningSlice = str.slice(0, userAnswer)
let myEndingSlice = str.slice(3)
let myFinalPigLatin = `${myEndingSlice}${myBeginningSlice}`
console.log(myFinalPigLatin)

let protoArray1 = "3,6,9,12"
let protoArray2 = "A;C;M;E"
let protoArray3 = "space delimited string"
let protoArray4 = "Comma-spaces, might, require typing, caution"

let strings = [protoArray1, protoArray2, protoArray3, protoArray4]

for (let i = 0; i < strings.length; i++) {
    let myProtoArr = strings[i]

    if (myProtoArr.includes(",")) {
        myProtoArr = myProtoArr.split(",").reverse().join(",")
    } else if (myProtoArr.includes(";")) {
            myProtoArr = myProtoArr.split(";").sort().join(",")
    } else if (myProtoArr.includes(" ")) {
            myProtoArr = myProtoArr.split(" ").sort().reverse().join(" ")
    }
    console.log(myProtoArr)
}

// 8.6.3 Bonus Mission: Multi-Dimensional Arrays

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodCabinet = food.split(",").sort()
let equipmentCabinet = equipment.split(",").sort()
let petsCabinet = pets.split(",").sort()
let sleepAidsCabinet = sleepAids.split(",").sort()

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet]
console.log(cargoHold)

//c) Query the user to select a cabinet (0 - 3) in the cargoHold.

let userCargoCabinetSelection = input.question("which cabinet would you like? (0-3) ")
userCargoCabinetSelection = Number(userCargoCabinetSelection)
console.log(userCargoCabinetSelection)

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (userCargoCabinetSelection < cargoHold.length) {
    console.log(cargoHold[userCargoCabinetSelection])
} else {
    console.log("ERROR: You selected the wrong amount")
}

//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”