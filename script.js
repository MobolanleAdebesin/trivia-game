// alert("Hello World");
let form = document.getElementById("quiz");
// form.addEventListener("submit", checkAnswer);
let submit = document.getElementById("submit");
submit.addEventListener("click", checkAnswer);
let correct = 0;
let accordion = document.getElementsByClassName("accordion");

for(let i=0; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(evt){
        evt.preventDefault();
        this.classList.toggle("active"); 
        let panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        } else{
            panel.style.display = "block";
        }
    })
}
function checkAnswer(evt) {
    evt.preventDefault();
    if (form.question1.value == "Cut off their toes and heels") {
        console.log("Correct!");
        correct++;
        console.log(correct);
    } else {
        console.log("Wrong")
        console.log(correct);
    }


    if (form.question2.value == "She was forced to wear a pair of red hot iron shoes until she dropped dead") {
        console.log("Correct");
        correct++
        console.log(correct);
    }
    else {
        console.log("Wrong");
    }
    if (form.question3.value == "Rapunzel's clothes no longer fit because she was pregnant") {
        console.log("Correct");
        correct++;
        console.log(correct);
    }




    //SCORING 
    if (correct === 3) {
        console.log("You got them all right!")
    }
    else if (correct < 3 && correct > 0) {
        console.log("You seem to know a bit");
    }
    else if (correct === 0) {
        console.log("Yikes. You got 'em all wrong. Better brush up on your fairy tales");
    }

}