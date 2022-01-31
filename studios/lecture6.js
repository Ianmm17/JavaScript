//11.11 Studio: More Functions

//1) Create a function with an array of numbers as its parameter. The function should iterate through
// the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

function findMinValue(numArr) {
    let minValue = undefined;
    for (let i = 0; i <numArr.length; i++) {
       if (minValue === undefined || minValue > numArr[i]) {
           minValue = numArr[i];
       }
    }
    return minValue
}
//Create a function with an array of numbers as its parameter. This function will return a new array with
// the numbers sorted from least to greatest value.

function sortLeastToGreatest(numArr) {
    const sortedArr = [];
    while (numArr.length !== 0) {
        const minValue = findMinValue(numArr);
        sortedArr.push(minValue);
        numArr.splice(numArr.indexOf(minValue), 1);
    }
    return sortedArr;
}

/*Within the function:
a) Define a new, empty array to hold the final sorted numbers.
b) Use the findMinValue function to find the minimum value in the old array.
c) Add the minimum value to the new array, and remove the minimum value from the old array.
d) Repeat parts b & c until the old array is empty.
e) Return the new sorted array.
f) Be sure to print the results in order to verify your code.*/

//Your function here...

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

const results = nums2.sort(function (a, b) {
    return a-b
})

const results2 = nums2.sort(function (a, b) {
    return b-a
})

console.log(results2);
