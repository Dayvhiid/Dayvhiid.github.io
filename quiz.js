let quest = document.getElementById("quest")
let quesOne = document.getElementById("q1")
let quesTwo = document.getElementById("q2")
let quesThree = document.getElementById("q3")
let quesFour = document.getElementById("q4")
let startBtn = document.getElementById("btn")
let nextBtn = document.getElementById("next_btn")
let prevBtn = document.getElementById("prev_btn")
let submitBtn = document.getElementById("submit_btn")
let reviewBtn = document.getElementById("review_btn")
let choice = document.getElementsByName("option")
let option1 = document.getElementById("Q1")
let option2 = document.getElementById("Q2")
let option3 = document.getElementById("Q3")
let option4 = document.getElementById("Q4")
let scoreLabel = document.getElementById("myLabel")
let answerValue;
let wrongCounter;
let score = 0


const questions = [
    {question: "What language is predominantly used on the web ?",
    options: ["Javascript","Python","c++","Rust"],
    answer: 0
},
{question: "which of these is a valid tech stack ?",
options: ["STERN","MSRP","BAT","MERN"],
answer:3
},
{question: "which of these is a backend tool ?",
options: ["React","Flutter","NodeJS","Kubernetes"],
answer:2
},
{question: "Is Javascript releted to Java ?",
options: ["Yes","No","Maybe","Kinda"],
answer: 1
},
{question: "which of these is a javascript framework ?",
options: ["ChartJS","Tailwind","Bootstrap","React"],
answer:3
}
]
let count = 0
nextBtn.style.display = "none"
prevBtn.style.display = "none"
submitBtn.style.display = "none"
reviewBtn.style.display = "none"






function start(){
    quest.innerHTML = questions[count].question;
    quesOne.innerHTML = questions[count].options[0]
    quesTwo.innerHTML = questions[count].options[1]
    quesThree.innerHTML = questions[count].options[2]
    quesFour.innerHTML = questions[count].options[3]
    nextBtn.style.display = "block"
    prevBtn.style.display = "block"

    startBtn.style.display = "none"
    count = 0
    console.log(count,"start")
    if(option1.checked){
        answerValue = 0
    } else if (option2.checked){
        answerValue = 1
    } else if(option3.checked){
           answerValue = 2
    } else{
         answerValue = 3
    }

   if(answerValue == questions[count].answer){
     score++
     console.log("correct")
   } else {
    //wrongCounter value holds the index of the choosen answer when wrong
      wrongCounter = answerValue
   }
}

function next(){
    count++
    quest.innerHTML = questions[count].question;
    quesOne.innerHTML = questions[count].options[0]
    quesTwo.innerHTML = questions[count].options[1]
    quesThree.innerHTML = questions[count].options[2]
    quesFour.innerHTML = questions[count].options[3]
    if(count  == 4) {
        nextBtn.style.display = "none"
        submitBtn.style.display  = "inline"
        reviewBtn.style.display = "inline"
    }
       if(option1.checked){
           answerValue = 0
       } else if (option2.checked){
           answerValue = 1
       } else if(option3.checked){
              answerValue = 2
       } else{
            answerValue = 3
       }


       console.log(answerValue)
       console.log(questions[count].answer)


      if(answerValue == questions[count - 1].answer){
        score++
        console.log("correct")
      }
    
}

function prev(){
    count--
    quest.innerHTML = questions[count].question;
    quesOne.innerHTML = questions[count].options[0]
    quesTwo.innerHTML = questions[count].options[1]
    quesThree.innerHTML = questions[count].options[2]
    quesFour.innerHTML = questions[count].options[3]
}

function submit(){
    if(answerValue == questions[count - 1].answer){
        score++
        console.log("correct")
      }
      scoreLabel.innerHTML = `You score is ${score}`
    console.log(score)
    console.log("the score for the last one is" + questions[4].answer)
}

function review(){
    if(questions[count - 1].answer == 0){
        quesOne.style.color = "green"
    } else if(questions[count - 1].answer == 1){
        quesTwo.style.color = "green"
    } else if(questions[count - 1].answer == 2){
        quesThree.style.color = "green"
    } else{
        quesFour.style.color = "green"
    }
}
