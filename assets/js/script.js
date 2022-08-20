// Questions/answers array for quiz
const Questions = [{
    id: 0,
    q: "Commonly used data type do NOT include:",
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

var start = true;

function iterate(id) {
    // Result display
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Grabbing question
    const question = document.getElementById("question");

    //Set question text
    question.innerText = Questions[id].q;

    //Grabbing options for question
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    // Option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Assigning true/false value to options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })
  
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })
  
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })
  
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })

    // Evaluate method, make work with example functionality
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "Correct!";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "Wrong!";
            result[0].style.color = "red";
        }
    })
}
 
// Next question method, make work on click of right/wrong answer instead of separate button
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
  
})