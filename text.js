const questionList = [{
    question: "what is the largest animal in the world",
    answers: [{
        text: "Shark",
        correct: false
    }, {
        text: "Blue-whale",
        correct: true
    }, {
        text: "Elephant",
        correct: false
    }, {
        text: "Girrafe",
        correct: false
    }, ]
}, {
    question: "what year did Nigeria gain independence",
    answers: [{
        text: "1965",
        correct: false
    }, {
        text: "1999",
        correct: false
    }, {
        text: "1960",
        correct: true
    }, {
        text: "1962",
        correct: false
    }, ]
}, {
    question: "which company had the first trillion dollar evaluation",
    answers: [{
        text: "Aramco",
        correct: false
    }, {
        text: "Google",
        correct: false
    }, {
        text: "Amazon",
        correct: false
    }, {
        text: "Apple",
        correct: true
    }, ]
}, {
    question: "What does HP stand for ?",
    answers: [{
        text: "Horese-Power",
        correct: false
    }, {
        text: "Honest-Premium",
        correct: false
    }, {
        text: "Hewlett-Packard",
        correct: true
    }, {
        text: "Honararium-Previle",
        correct: false
    }, ]
}];
var display = document.getElementById("question")
    // use this to get to the boolean expression questionList[0].answers[0].correct


const answer1 = document.getElementById("btn1")
const answer2 = document.getElementById("btn2")
const answer3 = document.getElementById("btn3")
const answer4 = document.getElementById("btn4")
const scoreBtn = document.getElementById("score-btn")


let answerPosition = 0






function start() {
    let currentQuestion = 0
    let currentAnswer = 0
    display.innerHTML = questionList[0].question
    const button = document.getElementById("next-btn")
    const answer1 = document.getElementById("btn1")
    const answer2 = document.getElementById("btn2")
    const answer3 = document.getElementById("btn3")
    const answer4 = document.getElementById("btn4")
    let pass; // for storing index of true
    let score;

    if (currentQuestion == 0) {
        answer1.innerHTML = questionList[0].answers[0].text
        answer2.innerHTML = questionList[0].answers[1].text
        answer3.innerHTML = questionList[0].answers[2].text
        answer4.innerHTML = questionList[0].answers[3].text
    }


    button.addEventListener("click", function() {
        currentQuestion++
        currentAnswer++
        // const booleanLoop = questionList[currentQuestion].answers
        // const check = booleanLoop.forEach((element, index, array) => {
        //     if (element.correct == true) {
        //         pass = array.indexOf(element)
        //             // console.log(pass)
        //     }

        // })
        display.innerHTML = questionList[currentQuestion].question
        answer1.innerHTML = questionList[currentQuestion].answers[0].text
        answer2.innerHTML = questionList[currentQuestion].answers[1].text
        answer3.innerHTML = questionList[currentQuestion].answers[2].text
        answer4.innerHTML = questionList[currentQuestion].answers[3].text
        if (currentQuestion == questionList.length - 1) {
            button.style.display = "none"
        }
        //to get the button that was clicked



        const booleanLoop = questionList[currentQuestion].answers
        const check = booleanLoop.forEach((element, index, array) => {
            if (element.correct == true) {
                pass = array.indexOf(element)
                    // console.log(pass)
            }
            answer1.addEventListener("click", function() {
                answerPosition = 0
                    //console.log(answerPosition)
            })
            answer2.addEventListener("click", function() {
                answerPosition = 1
                    //console.log(answerPosition)
            })
            answer3.addEventListener("click", function() {
                answerPosition = 2
                    // console.log(answerPosition)
            })
            answer4.addEventListener("click", function() {
                answerPosition = 3
                    //console.log(answerPosition)
            })

        })
        console.log("pass value is " + pass)
        console.log(pass, answerPosition)
            //console.log(check)

        // if (pass == answerPosition) {
        //     score++
        //     console.log("its equal")
        //         //console.log(score)
        // }


        scoreBtn.addEventListener("click", function() {
            console.log(`the score is` + score)
        })
    })




    //const prev = document.getElementById("prev-btn")
    // prev.addEventListener("click", function() {
    //     currentQuestion--
    //     answer1.innerHTML = questionList[currentQuestion].answers[0].text
    //     answer2.innerHTML = questionList[currentQuestion].answers[1].text
    //     answer3.innerHTML = questionList[currentQuestion].answers[2].text
    //     answer4.innerHTML = questionList[currentQuestion].answers[3].text
    //     display.innerHTML = questionList[currentQuestion].question
    // })
}