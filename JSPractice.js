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
module.exports = {sum, doubleInt, collectionsIntArray, doWeMatch}