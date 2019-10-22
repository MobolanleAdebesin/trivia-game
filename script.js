// alert("Hello World");
let form = document.getElementById("quiz");
form.addEventListener("submit", checkAnswer); 
let correct = 0;

function checkAnswer(evt){
    evt.preventDefault();
    if(form.question1.value == "Cut off their toes and heels"){
        console.log("Correct!");
        correct++;
        console.log(correct);
    }
    else{
        console.log("Wrong")
        console.log(correct);
    }

}