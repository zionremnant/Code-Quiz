var startBtn = document.getElementById("startBtn");
var time = 60;
var timeRemaining = true;
var timeStart = false;
var countdown = document.getElementById("countdown");
home = document.getElementById("home");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var answer = document.getElementById("answer");
var score = 0;
var output = "";
var highScores = [];
var i = 0;
// use let?

// questions
var questionArray = [{
    question: "Q: What is/are the type(s) of pop-up boxes available in JavaScript?",
    choice: ["Confirm", "Alert", "Promp", "All of the Above"],
    answer: "All of the Above"
},{
    question: "Q: What is used to enclose an if/else statement?", choice: ["Parentheses", "Curly Brackets", "Colon", "None of the Above"],
    answer: "parenthese"
},{
    question: "Q: Which element is used to link with JavaScript?",
    choice: ["<section>", "<meta>", "<link>", "<script>"],
    answer: "<script>"
},{
    question: "Q: How to create an array in JavaScript?",
    choice: ["var A={}", "var A=()", "var A=[]", "var A=<>"],
    answer: "var A=[]"
},{
    question: "Q: What is a useful tool to debug arrays?",
    choice: ["Terminal/Bash", "console.log", "Pest Control", "None of the Above"],
    answer: "console.log"
}];
// countdown
var timerInterval = setInterval(setCountdown, 1000);
function setCountdown(){
    if (timeStart) 
    time--;
    if(time<=0){
        endQuiz();
        time = 0;
    }
    document.getElementById("timer").innerHTML = time;
}
// event listener
startBtn.addEventListener("click", function(){
    quiz.style.display="block";
    home.style.display="none";
    countdown.style.display="block";
    document.getElementById("scoreboard").style.display="block";
    document.getElementById("score").innerHTML=score;
    setCountdown();
    setQuizQuestions();
    timeStart=true;
});
// questions & multiple choices
function setQuizQuestions(){
    question.textContent=questionArray[i].question;
    choice1.textContent=questionArray[i].choice[0];
    choice2.textContent=questionArray[i].choice[1];
    choice3.textContent=questionArray[i].choice[2];
    choice4.textContent=questionArray[i].choice[3];
};
choice1.addEventListener('click', function(event){
    event.stopPropagation();
    answer=questionArray[i].answer;
    console.log("answer" + answer);
    if(0===answer){
        document.getElementById("answerSelected".innerHTML = "Correct";
        setTimeout(function(){
            document.getElementById("answerSelected").innerHTML = "";
        },
            1000);
            score++;
            document.getElementById("score").innerHTML = score;
        }
        else{
            timeRemaining -= 5;
            document.getElementById("answerSelected").innerHTML = "Wrong";
            setTimeout(function(){
                document.getElementById("answerSelected").innerHTML="";
        },
        1000);
    }
    if(i >= questionArray.length -1){
        endQuiz();
    }
    else{
        i++
        setQuizQuestions();
    };
});
choice2.addEventListener('click', function(event){
    event.stopPropagation();
    answer=questionArray[i].answer;
    console.log(answer);
    if(1===answer){
        document.getElementById("answerSelected").innerHTML="Correct";
        setTimeout(function(){
            document.getElementById("answerSelected").innerHTML="";
        },
        1000);
        score++
        document.getElementById("score").innerHTML=score;
    }
    else{
        timeRemaining -= 5;
        document.getElementById("answerSelected").innerHTML="Wrong";
        setTimeout(function(){
            document.getElementById("answerSelected").innerHTML="";
        },
        1000);
    }
    if(i >= questionArray.length -1){
        endQuiz();
    }
    elseP
    i++
    setQuizQuestions();
};
});
choice3.addEventListener('click', function(event){
    event.stopPropagation();
    answer=questionArray[i].answer;
    console.log(answer);
    if (2===answer){
        document.getElementById("answerSelected").innerHTML="Correct";
        setTimeout(function(){
            document.getElementById("answerSelected").innerHTML="";
        },
        1000);
        score++;
        document.getElementById("score").innerHTML=score;
    }
    else{
        timeRemaining -= 5;
        document.getElementById("answerSelected").innerHTML="Wrong";
        setTimeout(function(){
            document.getElementById("answerSelected").innerHTML="";
        },
        1000);
    }
    if (i >= questionArray.length -1){
        endQuiz();
    }
    else{
        i++
        setQuizQuestions();
    };
});
choice4.addEventListener('click', function(event){
    event.stopPropagation();
    answer=questionArray[i].answer.value;
    console.log(answer);
    if(3===answer){
        document.getElementById("answerSelected").innerHTML="Correct";
        setTimeout(function(){
            document.getElementById("answeerSelected").innerHTML="";
        },
        1000);
        score++;
        document.getElementById("score").innerHTML=score;
    }
    else{
        timeRemaining -= 5;
        document.getElementById("answerSelected").innerHTML="Wrong";
        setTimeout(function(){
            document.getElementById("answerSelected").innerHTML="";
        },
        1000);
    }
    if(i >= questionArray.length -1){
        endQuiz();
    }
    else{
        i++
        setQuizQuestions();
    };
});
// end of the quiz
function endQuiz(){
    document.getElementById("gameOver").style.display="block";
    document.getElementById("quiz").style.display="none";
    document.getElementById("countdown").style.display="none";
    document.getElementById("scoreboard").style.display="none";
    document.getElementById("answerSelected").innerHTML="";
    document.getElementById("endScore").innerHTML=score;
}
// submit

}