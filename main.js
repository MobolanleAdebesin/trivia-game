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
let correct = ["Cut off their toes and heels",
               "She was forced to wear a pair of red hot iron shoes until she dropped dead",     
               "Rapunzel's clothes no longer fit because she was pregnant"
]
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
        for (let i = 0; i < allHeadings.length; i++) {
            this.questions.push(new Question(allHeadings[i], allInputs[i], image[i]));
        }
    }
    displayQuestion() {
        let questions = this.questions[this.count];
        questionNumber.innerText = `Question ${this.count + 1}`;
        heading.innerText = this.questions[this.count].heading;
        image.setAttribute("src", questions.image);
        submitButton.classList.remove("hidden");
        nextButton.classList.add("hidden");
        for (let i = 0; i < 4; i++) {
            inputs[i].setAttribute("value", questions.inputs[i]);
            inputs[i].setAttribute("name", `question ${this.count}`)
            paragraphs[i].innerText = questions.inputs[i];
        }
    }
    checkAnswer(){
        this.count++;
        let questions = this.questions[this.count]; 
        for(let i = 0; i < inputs.length; i++){
           if(form[i].checked){
               console.log(form[i].value)
               if(form[i].value == "Cut off their toes and heels"|| form[i].value == "She was forced to wear a pair of red hot iron shoes until she dropped dead" || form[i].value == "Rapunzel's clothes no longer fit because she was pregnant"){
                   body.classList.add("green"); 
                   nextButton.classList.remove("hidden");
                   
               }
               else{
                   body.classList.add("red");
                   nextButton.classList.remove("hidden");    
               }
           }
        }  
    }
    startGame() { 
        this.createQuestions();
        this.displayQuestion();
        quizContainer.classList.remove("hidden");
        intro.classList.add("hidden");

    }
}
let newBank = new Bank(); 

//Add Event Listener to start button for starting the quiz 
startButton.addEventListener("click", startGame);

//Function for starting the game 
function startGame(evt){
    evt.preventDefault();
    newBank.startGame();
}

//Event Listener on submit button to check the correct answer 
submitButton.addEventListener("click", checkAnswer)

//Function that calls the check answer function in the newBank Object
function checkAnswer(evt){
    evt.preventDefault();
    newBank.checkAnswer(); 
}

//Event Listener on the next button to move to the next question. 
nextButton.addEventListener("click", nextQuestion); 

//Function that changes the background back to original and calls the display questions function inside the newbank object 
function nextQuestion(evt){
    evt.preventDefault();
    body.classList.remove("green");
    body.classList.remove("red");
    newBank.displayQuestion();
}