# Trivia-game

## Description 
This trivia-game is my first General Assembly Project built without guidance. All the choices from the design of the game, the user interface, and logic were created from beginning to end. The goal of this project was to create a minimum viable project in the alloted 3 day time span, thus demonstrating my ability to work independently while meeting outlined technical requirements. 

The purpose of this project is for users to test their knowledge about the histories and origins or popular fairytales. 

## Installation: 
The game is hosted [here]( https://mobolanleadebesin.github.io/trivia-game/) on GitHub Pages 

## Technologies 
- HTML 
- CSS 
- JavaScript 

## Samples 
![fairytale landing page](https://github.com/MobolanleAdebesin/trivia-game/blob/master/Fairytale%20Landing%20Page.png)
![fairytale timer](https://github.com/MobolanleAdebesin/trivia-game/blob/master/Fairytale%20Timer%20.png)

## Approach 
The landing page provides an introduction to the user about the background behind the game. The game design is built such that when the user selects the start button: 
1. A timer begins counting down and the user is presented with the first question. 
2. Each question has for options for the user to pick from, but only one correct answer. 
3. When the user selects their answer they must click submit. This provides the user with the opportunity to change their mind before submitting their final answer. 
4. Once the submit button is clicked, the background of the page changes to a different color based on the users answer: green for a correct answer and red for an incorrect answer. 
5. The users score is displayed at the top of the window and indicates how many correct answers the user has selected. 
6. The game ends when the last question is answered or when time runs out. 
7. At the end of the game the user is displayed a unqiue message  that includes:
- The users final score 
- A phrase and associated message based on the user's score. 
8. Each time the user restarts the game both the order of the questions and the order of the answers are changed with a shuffle method. 

## Fundamental Concepts
- Learned how to integrate asynchronous code with classes and objects to enhance user interaction 
- By listening to user stories when testing the game, I was able to use an iterative design process to improve the game as I developed the logic of the game. 
- Reviewed mobile-first responsive design to make the game accessible on various devices/screen sizes. 

## Known Issues 
- Once a user selects an initial answer choice, the text remains highlighted even after they move on to the next question. 

## Future Improvements
- Allow user's score to be saved even when the game is reloaded
- Allow user's to keep track of their score on a master score board 

## Contributions 
If you find issues with the code or have suggestions for ways to improve the game, issues can be submitted [here](https://github.com/MobolanleAdebesin/trivia-game/issues).
The main repository for the game and all of the code can be found [here](https://github.com/MobolanleAdebesin/trivia-game). 



