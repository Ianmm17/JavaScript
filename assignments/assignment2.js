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

const newPointStructure = transform(oldPointStructure)

function oldScrabbleScorer(word) {
    word = word.toUpperCase();
    let letterPoints = "";

    for (let i = 0; i < word.length; i++) {

        for (const pointValue in oldPointStructure) {

            if (oldPointStructure[pointValue].includes(word[i])) {
                score += Number(pointValue)
                letterPoints += `Points for '${word[i]}': ${pointValue}\n`
            }

        }
    }
    return score;
}

function simpleScore(word) {
    word = word.toUpperCase();
    return word.length
}

function scrabbleScore(word) {
    score = 0
    word = word.toUpperCase()

    for (let i = 0; i < word.length; i++) {

        for (const letter in newPointStructure) {
            if (letter.toUpperCase() === word[i]) {
                score += newPointStructure[letter]
            }
        }
    }
    return score;
}

function vowelBonusScore(word) {
    score = 0
    word = word.toUpperCase();
    for (let i = 0; i < word.length; i++) {

        for (const pointValue in vowelBonusScoreStructure) {
            if (vowelBonusScoreStructure[pointValue].includes(word[i])) {
                score += Number(pointValue)
            }

        }
    }
    return score
}
// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let word = ""
function initialPrompt() {
    console.log("Let's play some scrabble!");
    word = input.question("Enter a word to score: ")
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

let score = 0;

const scoringAlgorithms = [{name: "Simple Score",
                            description: "Each letter is worth 1 point.",
                            scoringFunction: simpleScore},
                            {name: "Bonus Vowels",
                            description: "Vowels are 3 pts, consonants are 1pt.",
                            scoringFunction: vowelBonusScore},
                            {name: "Scrabble",
                            description: "the traditional scoring algorithm.",
                            scoringFunction: scrabbleScore}];
function scorerPrompt() {
    let scoringAlgorithm = Number(input.question("Which scoring algorithm would you like to use?\n" +
        "0 - Simple: One point per character\n" +
        "1 - Vowel Bonus: Vowels are worth 3 points\n" +
        "2 - Scrabble: Uses scrabble point system\n" +
        "Enter 0,1, or 2: "))
    if (scoringAlgorithm < 0 || scoringAlgorithm > 2) {
        scorerPrompt()
    } else if (scoringAlgorithm === 0) {
        console.log("algorithm name: ", scoringAlgorithms[scoringAlgorithm].name)
        console.log(`Score for '${word}': ${scoringAlgorithms[scoringAlgorithm].scoringFunction(word)}`)
    } else if (scoringAlgorithm === 1) {
        console.log("algorithm name: ", scoringAlgorithms[scoringAlgorithm].name)
        console.log(`Score for '${word}': ${scoringAlgorithms[scoringAlgorithm].scoringFunction(word)}`)
    } else if (scoringAlgorithm === 2) {
        console.log("algorithm name: ", scoringAlgorithms[scoringAlgorithm].name)
        console.log(`Score for '${word}': ${scoringAlgorithms[scoringAlgorithm].scoringFunction(word)}`)
    }
}

function transform(oldPointStructure) {
    let newResults = {};
    for (const item in oldPointStructure) {
        for (const indexLetter in oldPointStructure[item]) {
            newResults[(oldPointStructure[item][indexLetter]).toLowerCase()] = Number(item)
        }
    }
    return newResults
};


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

