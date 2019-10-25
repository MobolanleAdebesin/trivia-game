//Initializing variables to retrive elements from the html page. Elements include: the body, the heading, the labels, inputs, paragaphs, the image for each question, the introductory text, all of the buttons, the form, and the container that holds the form. 
let body = document.querySelector("body")
let countdown = document.querySelector("#countdown");
let playerScore = document.querySelector("#playerScore");
let timer = 80;
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
let restartButton = document.querySelector('#restart-btn');
let form = document.querySelector("#quiz");
let labelContainer = document.querySelector("#label-container");

//An array containing all of the correct answers. 
let correct = ["Cut off their toes and heels",
    "She was forced to wear a pair of red hot iron shoes until she dropped dead",
    "Rapunzel's clothes no longer fit because she was pregnant",
    "The nudging of her newborn twins awokened the princess",
    "The prince marries someone else, the little mermaid throws herself into the ocean and turns to foam",
    "The princess smashes the frog against the wall",
    "Pinnochio crushes him with a hammer",
    "Esmeralda dies and Quasimodo visits her grave until he too passes"
]
// class for structuring the format of the questions 
class Question {
    constructor(heading, inputs, image) {
        this.heading = heading;
        this.inputs = inputs;
        this.image = image;
    }
}

//class for creating a questions bank, essentially an array that assembles the question, images, and answers and then hold the questions in an aray. 
class Bank {
    constructor() {
        this.count = 0;
        this.score = 0;
        this.questions = [];
        this.highscore = 0;
    }
    createQuestions() {

        let allHeadings = ["In Cinderella, how did her step-sisters attempt to prove they were the mystery woman from the ball?",
            "In Snow White and the Seven Dwarves, how was the wicked queen punished at the end of the story?",
            "In the story of Rapunzel, how did the witch know Rapunzel had been visited by the prince?",
            "How was sleeping beauty awakened from her slumber in the Brothers Grimm version of the tale?",
            "How does the original story of the little mermaid end?",
            "In the story, The Frog Prince, how does the princess turn the prince back into a human?",
            "In Pinnochio what is the fate of Jiminy Cricket?",
            "How does Quasimodo and Esmeralda's story end in the original tale?"

        ];
        let allInputs = [
            ["Cut off their toes and heels", "Attempt to murder Cinderella", "Steal the glass slipper", "Kidnap the prince"],
            ["She was banished from the kingdom", "The hunter cut out her heart and liver", "She was forced to wear a pair of red hot iron shoes until she dropped dead", "The seven dwarves made her their maid for the rest of her life"],
            ["She spied on the pair and saw the prince climbing Rapunzel's hair", "Rapunzel's clothes no longer fit because she was pregnant", "Rapunzel said 'You pull much harder than the prince when you climb my hair", "The prince left behind a lock of hair"],
            ["True love's kiss awokened the princess", "The nudging of her newborn twins awokened the princess", "The pain from a dagger awokened the princess", "A special antidote awokened the princess"],
            ["The little mermaid and the prince marry", "The little mermaid turns back into a mermaid and never sees the prince again", "The prince banishes the little mermaid when he sees her talking to fish", "The prince marries someone else, the little mermaid throws herself into the ocean and turns to foam"],
            ["The princess smashes the frog against the wall", "The princess' true love restores the prince", "The prince stays a frog for eternity", "The princess kisses the frog"],
            ["Pinnochio crushes him with a hammer", "He also becomes human when Pinnochio does", "He is abandoned after Pinnochio becomes a real boy", "He was a figment of Pinnochio's imagination all along"],
            ["The pair lives happily ever after", "Esmeralda marries someone else and Quasimodo lives alone for the rest of his life", "Esmeralda dies and Quasimodo visits her grave until he too passes", "Quasmido sacrifices himself to save Esmeralda, but she is eventually captured anyway"]
        ]
        let image = ["glass-slipper.gif", "snow-white-queen.gif", "rapunzel-witch.gif", "sleeping-beauty.gif", "little-marmaid.gif", "frog-prince.gif", "cricket.gif", "Esmeralda.gif"];
        for (let i = 0; i < allHeadings.length; i++) {
            this.questions.push(new Question(allHeadings[i], allInputs[i], image[i]));
        }
    }
    displayQuestion() {
        if (this.count < 8) {
            let questions = this.questions[this.count];
            questionNumber.innerText = `Question ${this.count + 1}`;
            heading.innerText = this.questions[this.count].heading;
            image.setAttribute("src", `images/${questions.image}`);
            submitButton.classList.remove("hidden");
            nextButton.classList.add("hidden");
            for (let i = 0; i < 4; i++) {
                inputs[i].setAttribute("value", questions.inputs[i]);
                inputs[i].setAttribute("name", `question ${this.count}`)
                paragraphs[i].innerText = questions.inputs[i];
            }
        }
        else {
            this.gameOver();
        }
    }
    //Utilized the Fisher Yates shuffle algorithm: https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
    shuffle(array) {
        var m = array.length, t, s;
        while (m) {
            s = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[s];
            array[s] = t;
        }
        return array;
    }
    checkAnswer() {
        this.count++;
        submitButton.classList.add("hidden");
        let questions = this.questions[this.count];
        for (let i = 0; i < form.length; i++) {
            if (form[i].checked) {
                console.log(form[i].value)
                if (correct.includes(form[i].value)) {
                    body.classList.add("green");
                    nextButton.classList.remove("hidden");
                    this.score++;
                    playerScore.innerText = `Score: ${this.score}`;
                }
                else {
                    body.classList.add("red");
                    nextButton.classList.remove("hidden");
                    playerScore.innerText = `Score: ${this.score}`;
                }
            }
        }
    }
    startGame() {
        this.createQuestions();
        this.shuffle(this.questions);
        for (let i = 0; i < 4; i++) {
            this.shuffle(this.questions[i].inputs);
        }

        let time = setInterval(function () {
            countdown.innerHTML = `Time Remaining: ${timer} seconds`;
            timer--;
            if (timer == 0) {
                clearInterval(time);
                countdown.innerHTML = "Time is Up!";
                playerScore.classList.add("hidden");
                newBank.gameOver();
            }
        }, 1000);
        this.displayQuestion();
        quizContainer.classList.remove("hidden");
        intro.classList.add("hidden");
        startButton.classList.add("hidden");
        countdown.classList.remove("hidden");
    }
    gameOver() {
        //Previous score is set to what the current score is 
        this.prevScore = this.score;
        form.style.display = "none";
        
        let previousScore = document.createElement("h4");
        quizContainer.appendChild(previousScore);
        //The previous score is set to the sessionStorage item. 
        previousScore.innerHTML = `Your Previous Score: ${sessionStorage.getItem("lastScore")}`;

        //The sessionStorage item is equal to the previous score 
        sessionStorage.setItem("lastScore", this.prevScore);

        let gameOver = document.createElement("h2");
        quizContainer.appendChild(gameOver);
        gameOver.innerText = `Game Over Your Score is ${this.score} out of 8.`;

        let message = document.createElement("h3");
        quizContainer.appendChild(message);

        let gif = document.createElement("img");
        quizContainer.appendChild(gif);
        gif.setAttribute("class", "finalimg");
        restartButton.classList.remove("hidden");

        if (this.score == 8) {
            message.innerText = "A Perfect Score! You Really Know Your Stuff!";
            gif.setAttribute("src", "images/applause.gif");
        }
        else if (this.score < 8 && this.score > 4) {
            message.innerText = "Not Too Bad, But You Can Do Better!";
            gif.setAttribute("src", "images/tiana.gif");
        }
        else if (this.score <= 4) {
            message.innerText = "Yikes. Might Wanna Brush Up On Your Fairytales!";
            gif.setAttribute("src", "images/Pocahontas.gif")
        }
    }
}
//Initializing the instance of the class Bank called newBank; 
let newBank = new Bank();

//Add Event Listener to start button for starting the quiz 
startButton.addEventListener("click", startGame);

//Function for starting the game 
function startGame(evt) {
    evt.preventDefault();
    newBank.startGame();
}
//Event Listener on submit button to check the correct answer 
submitButton.addEventListener("click", checkAnswer)

//Function that calls the check answer function in the newBank Object
function checkAnswer(evt) {
    evt.preventDefault();
    newBank.checkAnswer();
}
//Event Listener on the next button to move to the next question. 
nextButton.addEventListener("click", nextQuestion);

//Function that changes the background back to original and calls the display questions function inside the newbank object 
function nextQuestion(evt) {
    evt.preventDefault();
    body.classList.remove("green");
    body.classList.remove("red");
    submitButton.classList.remove("hidden");
    newBank.displayQuestion();
}
//Event Listener on restart button to restart game
restartButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    window.location.reload();
})





