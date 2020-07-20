// arrays

var questions = [{
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<javascript>( )", "<script>( )", "<js>( )", "<scripting>( )"],
    answer: "<script>( )"
},
{
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["Both the <head> section and the <body> section( )", "The <body> section( )", "The <head> section( )", "Any place( )"],
    answer: "Both the <head> section and the <body> section( )"

},
{
    question: "How do you write 'Hello World' in an alert box?",
    choices: ["msg('Hello World');( )", "msgBox('Hello World');( )", "alertBox('Hello World';)( )", "alert('Hello World');( )"],
    answer: "alert('Hello World')( );"
},
{
    question: "Which of the following is not a reserved word in JavaScript?",
    choices: ["interface( )", "throws( )", "program( )", "short( )"],
    answer: "c"
},

{
    question: "Can you assign an anonymous funtion to a variable?",
    choices: ["True( )", "False( )"],
    answer: "True"
}
]

// variables

var score = 0;
var currenQuestion = -1;
var timeLeft = 0;
var timer;

// function 

function start() {
    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;


    timer = setInterval(function() {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(time);
            endGame();
        }
    }, 1000);
    
    next();
}

function endGame() {
    clearInterval(timer);

    var quizContent = `
    <>Game Over!</>
    <>You got ` + score / 20 + ` questions correct!</>
    <>Your score is ` + score + ` /100</>
    <input type="text" id="name" placeholder="First name">
    <button onclick="setScore()">Set score!</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
    

}