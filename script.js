// arrays

var questions = [{
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["javascript( )", "script( )", "js( )", "scripting( )"],
    answer: "script( )"
},
{
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["Both the head section and the body section( )", "The body section( )", "The head section( )", "Any place( )"],
    answer: "Both the head section and the body section( )"

},
{
    question: "How do you write 'Hello World' in an alert box?",
    choices: ["msg('Hello World');( )", "msgBox('Hello World');( )", "alertBox('Hello World';)( )", "alert('Hello World');( )"],
    answer: "alert('Hello World');( )"
},
{
    question: "Which of the following is not a reserved word in JavaScript?",
    choices: ["interface( )", "throws( )", "program( )", "short( )"],
    answer: "program( )"
},

{
    question: "Can you assign an anonymous function to a variable?",
    choices: ["True( )", "False( )"],
    answer: "True( )"
}
]



// variables

var score = 0;
var currentQuestion = -1;
var timeLeft = 0;
var timer;

// function 

function start() {
    timeLeft = 60;
    document.getElementById("timeLeft").innerHTML = timeLeft;


    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);

    next();
}

function endGame() {
    clearInterval(timer);

    var quizContent = `
    <h2>Game Over!</h2>
    <h3>You got ` + score / 20 + ` questions correct!</h3>
    <h3>Your score is ` + score + ` /100<h3/>
    <input type="text" id="name" placeholder="First name">
    <button onClick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;

}



function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value);
    getScore();
}

function getScore() {
    var quizContent = `
    <h1>` + localStorage.getItem("highscore") + `</h1><br>
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>

    <button onClick="clearScore()">Clear Score!</button><button onClick="resetGame()">Play Again!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;

}

function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");
    resetGame();

}
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = -1;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    var quizContent = `
    <h1>
        JavaScript Quiz!
    </h1>
    <h3>
        Click to play!   
    </h3>
    <button onclick="start()">Start!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}

function incorrect() {
    timeLeft -= 10; 
    next();
}


function correct() {
    score += 20;
    next();
}


function next() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }



    var quizContent = "<h2>" + questions[currentQuestion].question + "</h2>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>"; 
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode
    }


    document.getElementById("quizBody").innerHTML = quizContent;

 
}



