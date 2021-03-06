const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let status = "FAILED"
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";

let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];

let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
    // TODO 1.1b: Ask for candidate's name //
    candidateName = input.question("What's your name? ")
}

function askQuestion() {
    // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
    for (let i = 0; i < questions.length; i++) {
        candidateAnswers.push(input.question(`${[i + 1]}) ${questions[i]}`))
        console.log(`Your Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`)
    }
    return candidateAnswers
}

function gradeQuiz(candidateAnswers) {
    let answeredCorrect = 0;

    // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
    for (let i = 0; i < candidateAnswers.length; i++) {
        if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
            answeredCorrect += 1
        }
    }
    let grade = answeredCorrect / questions.length * 100;
    if (grade > 50) {
        status = "PASSED"
    }
    return grade
}
function runProgram() {
    askForName();
    // TODO 1.1c: Ask for candidate's name //
    console.log("Candidate Name: " + candidateName)
    candidateAnswers = askQuestion();
    let finalGrade = gradeQuiz(candidateAnswers);
    console.log(`>>> Overall Grade: ${finalGrade}% (${answeredCorrect} of ${questions.length}) <<<`)
    console.log(`>>> Status: ${status} <<<`)
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
    candidateName: candidateName,
    question: question,
    correctAnswer: correctAnswer,
    candidateAnswer: candidateAnswer,
    questions: questions,
    correctAnswers: correctAnswers,
    candidateAnswers: candidateAnswers,
    gradeQuiz: gradeQuiz,
    runProgram: runProgram
};

