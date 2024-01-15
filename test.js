const questions = [{
        question: "What Year did Nigeria Gain Independece ?",
        a: "1999",
        b: "1856",
        c: "1960",
        d: "1997",
        correct: "c"
    }, {
        question: "Who is the president of Nigeria ?",
        a: "Peter Obi",
        b: "Asiwaju Bola-Ahmed Tinubu",
        c: "Mohammadu Buhari",
        d: "Portable Omo Lalomi",
        correct: "b"
    }, {
        question: "What language is predominantly Used On the web ?",
        a: "Java",
        b: "Javascript",
        c: "C++",
        d: "Python",
        correct: "b"
    }, {
        question: "Which of these is a tech stack ? ",
        a: "MERN",
        b: "FAANG",
        c: "LIFO",
        d: "FIFO",
        correct: "a"
    }, {
        question: "What is the full name of HP ?",
        a: "Horse-Power",
        b: "Heresy-practitioners",
        c: "Henessy-performance",
        d: "Hewlett-Packard",
        correct: "d"
    }]
    //BUTTON  CONTROLS
const startBtn = document.getElementById("startBtn")
const nextBtn = document.getElementById("nextBtn")
const scoreBtn = document.getElementById("scoreBtn")
    //targeting the label tag
const option1 = document.getElementById("a")
const option2 = document.getElementById("b")
const option3 = document.getElementById("c")
const option4 = document.getElementById("d")
const display = document.getElementById("main")
    //targeting radio buttons
const Option1 = document.getElementById("option1")
const Option2 = document.getElementById("option2")
const Option3 = document.getElementById("option3")
const Option4 = document.getElementById("option4")
    //scoreLabel
const scoreLabel = document.getElementById("scoreLabel")
    //to hold the value of the selected answer
let holder;
// score variable
let score = 0
    //user array 
const userArray = []
    //answer array
const answerArray = ["c", "b", "b", "a", "d"]
    // starter variable
let starter = 0



let currentQuestion = 0
let answerLoopNumber = 0

nextBtn.style.display = "none"
scoreBtn.style.display = "none"
startBtn.addEventListener("click", function() {
    nextBtn.style.display = "inline-block"
    display.innerHTML = questions[currentQuestion].question
    option1.innerHTML = questions[currentQuestion].a
    option2.innerHTML = questions[currentQuestion].b
    option3.innerHTML = questions[currentQuestion].c
    option4.innerHTML = questions[currentQuestion].d
})

nextBtn.addEventListener("click", function() {
        currentQuestion++
        starter++
        if (Option1.checked) {
            holder = 'a'
            userArray.push("a")

        } else if (Option2.checked) {
            holder = 'b'
            userArray.push("b")

        } else if (Option3.checked) {
            holder = 'c'
            userArray.push("c")

        } else if (Option4.checked) {
            holder = 'd'
            userArray.push('d')

        }
        display.innerHTML = questions[currentQuestion].question


        option1.innerHTML = questions[currentQuestion].a
        option2.innerHTML = questions[currentQuestion].b
        option3.innerHTML = questions[currentQuestion].c
        option4.innerHTML = questions[currentQuestion].d;
        if (starter >= 4) {
            scoreBtn.style.display = "inline-block"
        }
        console.log(starter, currentQuestion)

        // questions.forEach((element, index, array) => {
        //         if (holder === element.correct) {
        //             score++
        //         }
        //     })
        //console.log(holder, questions[currentQuestion].correct)
        // if (Option1.checked == true) {
        //     holder = 'a'
        //     userArray.push(holder)

        // } else if (Option2.checked) {
        //     holder = 'b'
        //     userArray.push(holder)

        // } else if (Option3.checked) {
        //     holder = 'c'
        //     userArray.push(holder)

        // } else if (Option4.checked) {
        //     holder = 'd'
        //     userArray.push(holder)

        // }
    })
    //console.log(holder, typeof(questions[currentQuestion].correct))
scoreBtn.addEventListener("click", function() {
    for (let i = 0; i < userArray.length; i++) {
        console.log(userArray[i])
    }

    for (let c = 0; c < userArray.length; c++) {
        if (userArray[c] == answerArray[c]) {
            score++

        }
    }
    console.log(score)
    scoreBtn.style.display = "none"
    scoreLabel.innerHTML = `Your score is ${score}`
})

//console.log(userArray[1])
//console.log(score)