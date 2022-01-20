const input = require('readline-sync');
//9.10.1
//Part A #1: Initialize variables to store the following arrays. Remember to use descriptive names.

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let vegetable =  ['peas', 'green beans', 'kale','edamame', 'broccoli', 'asparagus'];
let beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let dessert = ['apple', 'banana', 'more kale','ice cream', 'chocolate', 'kiwi'];

let pantry = [protein, grain, vegetable, beverage, dessert]
console.log(pantry)
//Part A #2: Construct a for loop that assembles a meal for each of 6 astronauts.
/*
a. The meals must include one item from each of the source arrays.
b. Each ingredient can only be used ONCE.
c. Print out each meal.
*/

for (let i = 0; i < 6; i++) {
    let meal = []
    meal.push(protein[i], grain[i], vegetable[i], beverage[i], dessert[i])
    console.log(`I'm about to enjoy some ${meal[0]} with some ${meal[1]}, ${meal[2]}, ${meal[3]}, ${meal[4]}`)
    console.log(`I'm about to enjoy some ${meal[0]} with some ${meal.slice(1).join(", ")}`)
}

//9.10.3
//Part C #5: Using a while loop, ask the user to select the number of meals to assemble.  Validate the input to make sure it is an integer from 1 - 6.

let userChoice = 0

while (userChoice < 1 || userChoice > 6) {
    userChoice = Number(input.question("Select the number of meals to assemble (1-6) "))

    if (userChoice >= 1 && userChoice <= 6) {
        
    }
}

//Skill boosts: 
// a. Use string formatting to print something more interesting than “[‘chicken’, ‘rice’, ‘peas’, ‘juice’, ‘apple’]” for the meal outputs.
// b. Use an “array of arrays” to store the food options in a ‘pantry’.
// c. Modify your code to check each meal for kale.  If present, after the meal output add, “Don’t worry, you can have double chocolate tomorrow.”



//9.10.2
//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.

//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.

//For now, make sure the two strings contain the same number of characters!

let str1 = 'LoOt';
let str2 = 'oku!';
let fullStr = "";

for (let i = 0; i < str1.length; i++) {
    fullStr += str1[i] + str2[i]
}

console.log(fullStr)