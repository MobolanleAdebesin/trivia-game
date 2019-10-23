


// alert("hello world")

//Initializing variables to retrive elements from the html page. Elements include: the body, the heading, the labels, inputs, paragaphs, the image for each question, the introductory text, all of the buttons, the form, and the container that holds the form. 
let body = document.querySelector("body")
let heading = document.getElementById("heading")
let labels = document.getElementsByTagName("label");
let inputs = document.getElementsByTagName("input");
let paragraphs = document.getElementsByTagName("p");
let image = document.getElementById("main-image");
let intro = document.querySelector("#intro");
let startButton = document.querySelector(".start-quiz-btn");
let quizContainer = document.querySelector("#quiz-container");
let questionNumber = document.querySelector("#questionNumber")
let submitButton = document.querySelector("#submit-btn");
let nextButton = document.querySelector('#next-btn');
let form = document.querySelector("#quiz");


//Function for checking answers 


//Each question will include: 
//One heading with the question. 
//One image 
//four labels 
//four inputs 
//four paragraphs

class Question {
    constructor(heading, inputs, image) {
        this.heading = heading;
        this.inputs = inputs;
        this.image = image;
    }

}

class Bank {
    constructor() {
        this.count = 0;
        this.questions = [];
    }
    createQuestions() {

        let allHeadings = ["In Cinderalla, how did her step-sisters attempt to prove they were the mystery woman from the ball?",
            "In Snow White and the Seven Dwarves, how was the wicked queen punished at the end of the story?",
            "In the story of Rapunzel, how did the witch know Rapunzel had been visited by the prince?"];
        let allInputs = [
            ["Cut off their toes and heels", "Attempt to murder Cinderella", "Steal the glass slipper", "Kidnap the prince"],
            ["She was banished from the kingdom", "The hunter cut out her heart and liver", "She was forced to wear a pair of red hot iron shoes until she dropped dead", "The seven dwarves made her their maid for the rest of her life"],
            ["She spied on the pair and saw the prince climbing Rapunzel's hair", "Rapunzel's clothes no longer fit because she was pregnant", "Rapunzel said 'You pull much harder than the prince when you climb my hair", "The prince left behind a lock of hair"]
        ]
        let image = ["glass-slipper.gif", "snow-white-queen.gif", "rapunzel-witch.gif"];
        for (let i = 0; i < 3; i++) {
            this.questions.push(new Question(allHeadings[i], allInputs[i], image[i]));
        }
    }
    displayQuestion() {
        let questions = this.questions[this.count];
        questionNumber.innerText = `Question ${this.count + 1}`;
        heading.innerText = this.questions[this.count].heading;
        image.setAttribute("src", questions.image);
        submitButton.classList.remove("hidden");
        for (let i = 0; i < 4; i++) {
            inputs[i].setAttribute("value", questions.inputs[i]);
            inputs[i].setAttribute("name", `question ${this.count}`)
            paragraphs[i].innerText = questions.inputs[i];
        }
    }
    checkAnswer(){
        let questions = this.questions[this.count]; 
        for(let i = 0; i < inputs.length; i++){
           if(form[i].checked){
               console.log(form[i].value)
               if(form[i].value == "Cut off their toes and heels"){
                   alert("Correct!")
               }
               else{
                   alert("incorrect");
               }

           }
        }
        
    }

    startGame() { 
        this.createQuestions();
        this.displayQuestion();
        quizContainer.classList.remove("hidden");
    }
}
let newBank = new Bank(); 
//Add Event Listener to start button for starting the quiz 
startButton.addEventListener("click", startGame);
// submitButton.addEventListener("click", checkAnswer)
//Function for starting the game 
function startGame(evt){
    evt.preventDefault();
    newBank.startGame();
}
submitButton.addEventListener("click", checkAnswer)

function checkAnswer(evt){
    evt.preventDefault();
    newBank.checkAnswer(); 
}


//  class Quiz{
//     constructor(){
//         this.bank = new Bank();
//     }
// initQuestions(){
//     this.bank.createQuestions();
// }

//  }

// let myQuiz = new Quiz();




// for(let i = 0; i < selectionButtons.length; i++){
//     selectionButtons[i].addEventListener("click", chooseMode);
// }
// function chooseMode(evt){
//     evt.preventDefault();
//     intro.classList.add("hidden");
//     quizContainer.classList.remove("hidden");
//     selectionButtons[0].classList.add("hidden");
//     selectionButtons[1].classList.add("hidden");
// }

// for(let i = 0; i < labels.length; i++){
//     questionNumber.innerText = question1.questionNumber;
//     heading.innerText = question1.heading; 
//     image.setAttribute("src", question1.image); 
//     inputs[i].setAttribute("value", question1.input[i]);
//     paragraphs[i].innerText = question1.input[i];
// }

// submitButton.addEventListener("click", submitAnswer);

// function submitAnswer(evt){
//     evt.preventDefault();
//     body.classList.add("green");
//     nextButton.classList.remove("hidden");
// }

// nextButton.addEventListener("click", nextQuestion); 

// function nextQuestion(evt){
//     evt.preventDefault(); 
//     for(let i = 0; i < labels.length; i++){
//         questionNumber.innerText = question2.questionNumber;
//         heading.innerText = question2.heading; 
//         image.setAttribute("src", question2.image); 
//         inputs[i].setAttribute("value", question2.input[i]);
//         paragraphs[i].innerText = question2.input[i];
//         body.classList.remove("green");
// } 
// }
