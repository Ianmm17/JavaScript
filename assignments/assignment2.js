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

const newPointStructure = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10}

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
    word = word.toUpperCase()

    for (let i = 0; i < word.length; i++) {

        for (const pointValue in newPointStructure) {

            if (newPointStructure[pointValue].includes(word[i])) {
                score += Number(pointValue)
            }

        }
    }
    console.log(typeof score)
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
    oldPointStructure = newPointStructure
    return oldPointStructure
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

