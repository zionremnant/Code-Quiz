// variables
var startBtn = document.getElementById("startBtn");
var time = 60;
var timeRemaining = true;
var timeStart = false;
var countdown = document.getElementById("countdown");
var home = document.getElementById("home");
var quiz = document.getElementById("quiz");
var question = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var answer = document.getElementById("answer");
var score = 0;
var output = " ";
var highScores = [];
let i = 0;
var clear = document.getElementById("clear");
var back = document.getElementById("back");

// questions
var questionArray = [{
    question: "Q: What is/are the type(s) of pop-up boxes available in JavaScript?",
    choice: ["Confirm", "Alert", "Prompt", "All of the Above"],
    answer: 3
},{
    question: "Q: What is used to enclose an if/else statement?", 
    choice: ["Parentheses", "Curly Brackets", "Colon", "None of the Above"],
    answer: 0
},{
    question: "Q: Which element is used to link with JavaScript?",
    choice: ["<section>", "<meta>", "<link>", "<script>"],
    answer: 3
},{
    question: "Q: How to create an array in JavaScript?",
    choice: ["var A={}", "var A=()", "var A=[]", "var A=<>"],
    answer: 2
},{
    question: "Q: What is a useful tool to debug arrays?",
    choice: ["Terminal/Bash", "console.log", "Pest Control", "None of the Above"],
    answer: 1
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
    console.log(answer);
    if(0 === answer){
        document.getElementById("answerSelected").innerHTML = "Correct";
        setTimeout(function(){
            document.getElementById("answerSelected").innerHTML = "";
        },
        1000);
        score++;
        document.getElementById("score").innerHTML = score;
    }
    else{
        timeRemaining -= 10;
        document.getElementById("answerSelected").innerHTML = "Wrong";
        setTimeout(function(){
            document.getElementById("answerSelected").innerHTML = "";
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
choice2.addEventListener('click', function(event){
    event.stopPropagation();
    answer=questionArray[i].answer;
    console.log(answer);
    if(1 === answer){
        document.getElementById("answerSelected").innerHTML = "Correct";
        setTimeout(function(){
            document.getElementById("answerSelected").innerHTML = "";
        },
        1000);
        score++
        document.getElementById("score").innerHTML=score;
    }
    else{
        timeRemaining -= 10;
        document.getElementById("answerSelected").innerHTML = "Wrong";
        setTimeout(function(){
            document.getElementById("answerSelected").innerHTML = "";
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
choice3.addEventListener('click', function(event){
    event.stopPropagation();
    answer=questionArray[i].answer;
    console.log(answer);
    if(2 === answer){
        document.getElementById("answerSelected").innerHTML = "Correct";
        setTimeout(function(){
            document.getElementById("answerSelected").innerHTML = "";
        },
        1000);
        score++;
        document.getElementById("score").innerHTML = score;
    }
    else{
        timeRemaining -= 10;
        document.getElementById("answerSelected").innerHTML = "Wrong";
        setTimeout(function(){
            document.getElementById("answerSelected").innerHTML = "";
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
    answer=questionArray[i].answer;
    console.log(answer);
    if(3 === answer){
        document.getElementById("answerSelected").innerHTML = "Correct";
        setTimeout(function(){
            document.getElementById("answerSelected").innerHTML = "";
        },
        1000);
        score++;
        document.getElementById("score").innerHTML = score;
    }
    else{
        timeRemaining -= 10;
        document.getElementById("answerSelected").innerHTML = "Wrong";
        setTimeout(function(){
            document.getElementById("answerSelected").innerHTML = "";
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
// end of the quiz
function endQuiz(){
    document.getElementById("gameOver").style.display="block";
    document.getElementById("quiz").style.display="none";
    document.getElementById("countdown").style.display="none";
    document.getElementById("scoreboard").style.display="none";
    document.getElementById("answerSelected").innerHTML="";
    document.getElementById("endScore").innerHTML=score;
}
// submit with initials
function submitScore(){
    highScores.push(document.getElementById("initials").value + " " + score);
    viewHighScores();
}
// scoreboard
function viewHighScores(){
    document.getElementById("quiz").style.display="none";
    document.getElementById("highScoresPage").style.display="block";
    document.getElementById("gameOver").style.display="block";
    output="";
    for(let k=0; k<highScores.length; k++){
        output = output + " " + highScores[k];
    }
    document.getElementById("highScores").innerHTML = output;
    clear();
}


// refresh to homepage
    function home(){
        document.getElementById("highScoresPage").style.display="none";
        document.getElementById("home").style.display="block";
        clear();
    }
//reset highscores
back.addEventListener("click", function (event){
    location.reload();
});

// refresh
clear.addEventListener("click", function (event){
    time = 60;
    timeRemaining = true;
    timeStart = false;
    i = 0;
    score = 0;
});
localStorage.setItem("score", JSON.stringify(answerSelected));
localStorage.setItem("initials", JSON.stringify(initials));