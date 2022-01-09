function sum(a, b) {
    return a + b;
}


function doubleInt(num) {
    return num * 2;
}
function collectionsIntArray(nums) {
    let newSlice = []
    for (let i = 0; i < nums.length; i++) {
        let double = nums[i] * 2
        newSlice.push(double)
    }
    return newSlice
}
function doWeMatch(array1, array2) {
    if (array1.length != array2.length) {
        return false
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return false
        }
    }
    return true
}
function lowestAndHighest(numArray, choice) {
    if (numArray.length === 0) {
        return []
    }
    let totalAdd = 0
    let low = numArray[0]
    let high = numArray[0]

    for (let i = 1; i < numArray.length; i++) {
        if (numArray[i] > high) {
            high = numArray[i]
        }
        if (numArray[i] < low) {
            low = numArray[i]
        }
    }
    if (choice === "add") {
        totalAdd = low + high
    }
    if (choice === "multiply") {
        totalAdd = low * high
    }
    return [low, high, totalAdd]
}
function numberOfLegs(numSheep, numChickens, numOctopi) {
    const numSheepLegs = numSheep * 4
    const numChickenLegs = numChickens * 2
    const numOctopiLegs = numOctopi * 8

    const totalNumOfLegs = numSheepLegs + numChickenLegs + numOctopiLegs

    return totalNumOfLegs
}
function sumInt(numArray) {
    let sum = 0
    for(let i = 0; i < numArray.length; i++) {
        sum += numArray[i]
    }
    return sum
}
function productMulti(array) {
    let sum = 1
    for(let i = 0; i < array.length; i++) {
        sum *= array[i]
    }
    return sum
}
function userChoiceAddOrMultiply(array, usersChoice) {
    if (usersChoice) {
        return sumInt(array)
    } else {
        return productMulti(array)
    }
}
function convertToSeconds(hour, min) {
    return hrToSec(hour) + minToSec(min)
}
function minToSec(min) {
    return min * 60
}
function hrToSec(hour) {
    return hour * 3600
}
module.exports = {sum, doubleInt, collectionsIntArray, doWeMatch, 
    lowestAndHighest, numberOfLegs, sumInt, 
    productMulti, userChoiceAddOrMultiply, convertToSeconds}