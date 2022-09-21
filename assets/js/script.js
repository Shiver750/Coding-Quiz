// Questions/answers array for quiz
var startButton = document.querySelector("#start-button");
var submitButton = document.querySelector("#submit");
var timerElement = document.querySelector("#time");
var questionElement = document.querySelector("#question-card");
var questionChoices = document.querySelector('#choices');
var feedbackElement = document.querySelector('#feedback');
var nameElement = document.querySelector('#name');


const Questions = [{
    id: 0,
    q: "Commonly used data types do NOT include:",
    a: [
        { text: "Strings", isCorrect: false },
        { text: "Booleans", isCorrect: false },
        { text: "Alerts", isCorrect: true },
        { text: "Numbers", isCorrect: false },
    ]
},
{
    id: 1,
    q: "Arrays in Javascript can be used to store ____.",
    a: [
        { text: "Numbers and Strings", isCorrect: false },
        { text: "Other Arrays", isCorrect: false },
        { text: "Booleans", isCorrect: false },
        { text: "All of the above", isCorrect: true },
    ]
},
{
    id: 2,
    q: "String values must be enclosed within ____ when being assigned to variables.",
    a: [
        { text: "1. Commas", isCorrect: false },
        { text: "2. Curly Brackets", isCorrect: false },
        { text: "3. Quotes", isCorrect: true },
        { text: "4. parentheses", isCorrect: false },
    ]
},
{
    id: 3,
    q: "The condition in an if/else statement is enclosed within ____.",
    a: [
        { text: "1. Quotes", isCorrect: false },
        { text: "2. Curly Brackets", isCorrect: false },
        { text: "3. Parentheses", isCorrect: true },
        { text: "4. Square Brackets", isCorrect: false },
    ]
},
{
    id: 4,
    q: "A very useful tool used during development and debugging for printing content to the debugger is ____",
    a: [
        { text: "JavaScript", isCorrect: false },
        { text: "terminal/bash", isCorrect: false },
        { text: "for loops", isCorrect: false },
        { text: "console.log", isCorrect: true },
    ]
}]

var currentQuestionIndex = 0;
var time = parseInt(Questions.length * 15);
var timerId;

function startQuiz () {
    var startScreen = document.querySelector("#start-card");
    startScreen.setAttribute('class', 'hide');

    questionElement.removeAttribute('class');
    
    timerId = setInterval(clockTick, 1000);
    console.log(time);
    console.log(clockTick);
    timerElement.textContent = time;

    
    getQuestion();
}
// loop over choices
function getQuestion () {
    var currentQuestion = Questions[currentQuestionIndex];

    var titleEl = document.querySelector("#question-text");
    titleEl.textContent = currentQuestion.q;

    questionChoices.innerHTML = '';

    for (var i = 0; i < currentQuestion.a.length; i++){
        console.log(currentQuestion);
        console.log(currentQuestion.a);

        // Create button for each choice
        var choice = currentQuestion.a[i];
        var choiceNode = document.createElement('button');
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);

        choiceNode.textContent = i + 1 + '. ' + choice;

        // Display on page
        questionChoices.appendChild(choiceNode);
    }
}

function questionClick(event) {
    var buttonEl = event.target;

    //if the clicked element is not a choice button return and do nothing
    if (!buttonEl.matches('.choice')) {
        return;
    }

// check if user guesssed wrong
//PROBABLY WRONG, CHECK THIS
if (buttonEl.value !== Questions.isCorrect) {

    //subtract time
    time -=15;

    if (time < 0) {
        time = 0;
    }

    //display new time on page
    timerElement.textContent = time;

    feedbackElement.textContent = 'false!';
} else {
    feedbackElement.textContent = 'true!';
}

//display true/false feedback on page for half sec
feedbackElement.setAttribute('class', 'feedback');
setTimeout(function () {
    feedbackElement.setAttribute('class', 'feedback hide');
}, 1000);

//next question
currentQuestionIndex++;

//check if any questions left
if (time <= 0 || currentQuestionIndex === Questions.length) {
    quizEnd();
} else {
    getQuestion();
 }

}

function quizEnd() {
    // stop timer
    clearInterval(timerId);

    // show end screen
    var endScreenEl = document.querySelector('#end-card');
    endScreenEl.removeAttribute('class');

    //show the final score
    var finalScoreEl = document.querySelector('#final-score');
    finalScoreEl = textContent = time;

    // hide the questions section

    questionElement.setAttribute('class', 'hide');
}

function clockTick() {
    //update timer
    time--;
    timerElement.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}

startButton.onclick = startQuiz;

questionChoices.onclick = questionClick;

function saveHighScore() {

    var name = nameElement.value.trim();

    if (name !== '') {
        // get saved scores from local storage, or set to empty array if none saved
        var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

        // format new score for current user

        var newScore = {
            score: time,
            name: name,
        };

        //save to local storage
        highscores.push(newScore);
        window.localStorage.setItem('highscores', JSON.stringify('highscores'));

        highscores.textContent = newScore;

        window.location.href = 'highscores.html';
        listHighScores();
    }
}

function checkForEnter(event) {
    if (event.key === 'Enter') {
        saveHighScore();
    }
}

submitButton.onclick = saveHighScore;

if (nameElement) {
    nameElement.onkeyup = checkForEnter;
}

// render high scores

function listHighScores() {
    var highScoresEl = document.querySelector('#highscores');
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];

    for (var i = 0; i < highscores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = highscores[i].name + " " + highscores[i].score;
        highScoresEl.appendChild(createLi);
    }
}






