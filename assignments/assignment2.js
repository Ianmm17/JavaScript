const input = require('readline-sync');

const oldPointStructure = {
    1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2: ['D', 'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};
function oldScrabbleScorer(word) {
    word = word.toUpperCase();
    let letterPoints = "";

    for (let i = 0; i < word.length; i++) {

        for (const pointValue in oldPointStructure) {

            if (oldPointStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`
            }

        }
    }
    return letterPoints;
}

function simpleScore(word) {
    let letterPoints = "";
    console.log("made it")
    for (let i = 0; i < word.length; i++) {

        for (const pointValue in simpleScoreStructure) {

            if (simpleScoreStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`
            }

        }
    }
    return letterPoints;
}

function vowelBonusScore(word) {
    let letterPoints = "";

    for (let i = 0; i < word.length; i++) {

        for (const pointValue in vowelBonusScoreStructure) {

            if (vowelBonusScoreStructure[pointValue].includes(word[i])) {
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`
            }

        }
    }
    return letterPoints;
}
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word = ""
function initialPrompt() {
    console.log("Let's play some scrabble!");
    return word = input.question("Enter a word to score: ").toUpperCase()
};

let simpleScoreStructure = {
    1: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
};

let vowelBonusScoreStructure = {
    1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K',
        'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
    3: ['A', 'E', 'I', 'O', 'U']
};

let scrabbleScore;

const scoringAlgorithms = [{
    SimpleScore: simpleScore(word),
    BonusVowels: vowelBonusScore(word),
    Scrabble: oldScrabbleScorer(word)
}];

function scorerPrompt() {
    let scoringAlgorithm = Number(input.question("Which scoring algorithm would you like to use?\n" +
        "0 - Simple: One point per character\n" +
        "1 - Vowel Bonus: Vowels are worth 3 points\n" +
        "2 - Scrabble: Uses scrabble point system\n" +
        "Enter 0,1, or 2: "))

    if (scoringAlgorithm === 0) {
        console.log("WE PICKED 0")
        console.log(scoringAlgorithms[0].SimpleScore)
    } else if (scoringAlgorithm === 1) {
        return scoringAlgorithms[1].BonusVowels
    } else if (scoringAlgorithm === 2) {
        return scoringAlgorithms[2].Scrabble
    }
}

function transform() {};

let newPointStructure;

function runProgram() {
   initialPrompt()
   scorerPrompt()
}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
    initialPrompt: initialPrompt,
    transform: transform,
    oldPointStructure: oldPointStructure,
    simpleScore: simpleScore,
    vowelBonusScore: vowelBonusScore,
    scrabbleScore: scrabbleScore,
    scoringAlgorithms: scoringAlgorithms,
    newPointStructure: newPointStructure,
    runProgram: runProgram,
    scorerPrompt: scorerPrompt
};

runProgram()