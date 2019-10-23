// alert("hello world")
let heading = document.getElementById("heading")
let labels = document.getElementsByTagName("label"); 
let inputs = document.getElementsByTagName("input");
let paragraphs = document.getElementsByTagName("p");
let image = document.getElementById("main-image");
//Each question will include: 
//One heading with the question. 
//One image 
//four labels 
//four inputs 
//four paragraphs 

let question1 = {
    heading: "In Cinderalla, how did her step-sisters attempt to prove they were the mystery woman from the ball?", 
    image: "glass-slipper.gif", 
    input: [
        "Cut off their toes and heels", 
        "Attempt to murder Cinderella", 
        "Steal the glass slipper", 
        "Kidnap the prince"
    ]
    }

console.log(labels);
console.log(inputs);
console.log(paragraphs)
console.log(image);
console.log(heading);

// console.log(question1);
// console.log(question1.heading);
// console.log(question1.image);

// for(let i = 0; i < question1.input.length; i++ ){
//     console.log(question1.input[i]);
// }

for(let i = 0; i < labels.length; i++){
    heading.innerText = question1.heading; 
    image.setAttribute("src", question1.image); 
    inputs[i].setAttribute("value", question1.input[i]);
    paragraphs[i].innerText = question1.input[i];

}

