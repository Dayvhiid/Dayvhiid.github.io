const questions = [{
    question: "what is the largest animal in the world",
    answers: [
        { text: "Shark", correct: false },
        { text: "Blue-whale", correct: true },
        { text: "Elephant", correct: false },
        { text: "Girrafe", correct: false },
    ]
}, {
    question: "what year did Nigeria gain independence",
    answers: [
        { text: "1962", correct: false },
        { text: "1999", correct: false },
        { text: "1960", correct: true },
        { text: "1962", correct: false },
    ]
}, {
    question: "which company had the first trillion dollar evaluation",
    answers: [
        { text: "Aramco", correct: false },
        { text: "Google", correct: false },
        { text: "Amazon", correct: false },
        { text: "Apple", correct: true },
    ]
}, {
    question: "What does HP stand for ?",
    answers: [
        { text: "Horese-Power", correct: false },
        { text: "Honest-Premium", correct: false },
        { text: "Hewlett-Packard", correct: true },
        { text: "Honararium-Previle", correct: false },
    ]
}];

const questionElement = document.getElementById("question")
const answerButton = document.getElementById("answer-buttons")
const nextButton = document.getElementsByClassName("next-btn")
let currentQuestionIndex = 0;
let score = 0;
console.log("sdsdf")
answerButton.style.display = "none"

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next"
    console.log("sdsdf")
    showquestion()
}

function showquestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo
    console.log("sdsdf")
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button)
    })
}

startQuiz();