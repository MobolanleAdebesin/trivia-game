// alert("hello world")
let heading = document.getElementById("heading")
let labels = document.getElementsByTagName("label"); 
let inputs = document.getElementsByTagName("input");
let paragraphs = document.getElementsByTagName("p");
let image = document.getElementById("main-image");
let intro = document.querySelector("#intro");
let selectionButtons = document.querySelectorAll(".select-quiz-btn");
let quizContainer = document.querySelector("#quiz-container");
let questionNumber = document.querySelector("#questionNumber")
//Each question will include: 
//One heading with the question. 
//One image 
//four labels 
//four inputs 
//four paragraphs 



let question1 = {
    questionNumber: "Question One:",
    heading: "In Cinderalla, how did her step-sisters attempt to prove they were the mystery woman from the ball?", 
    image: "glass-slipper.gif", 
    input: [
        "Cut off their toes and heels", 
        "Attempt to murder Cinderella", 
        "Steal the glass slipper", 
        "Kidnap the prince"
    ]
    }




for(let i = 0; i < selectionButtons.length; i++){
    selectionButtons[i].addEventListener("click", chooseMode);
}
function chooseMode(evt){
    evt.preventDefault();
    intro.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    selectionButtons[0].classList.add("hidden");
    selectionButtons[1].classList.add("hidden");



}

for(let i = 0; i < labels.length; i++){
    questionNumber.innerText = question1.questionNumber;
    heading.innerText = question1.heading; 
    image.setAttribute("src", question1.image); 
    inputs[i].setAttribute("value", question1.input[i]);
    paragraphs[i].innerText = question1.input[i];

}

