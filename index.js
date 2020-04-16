var Word = require("./Word");
var inquirer = require("inquirer");

var animalWords = ["moose", "cat", "dolphin", "snake", "goose", "monkey", "tortoise", "eagle", "hamster"];

var wordPicked;
var currentWord;
var remainingGuess;


function initGame() {
    
    wordPicked = animalWords[Math.floor(Math.random() * animalWords.length)];

    
    currentWord = new Word(wordPicked);
    currentWord.renderWord();

    remainingGuess = 12;

}


console.log("\nWord Guess! Name that animal!  You will have 12 guesses starting.");

initGame();


function playGame() {

    if (remainingGuess > 0) {

        inquirer.prompt([
            {
                type: "input",
                message: "Guess a letter!",
                name: "letter"
            }
        ]).then(function (answer) {

             
            currentWord.checkWord(answer.letter);
            
            currentWord.renderWord();

            remainingGuess--;

            
            if (wordPicked.includes(answer.letter)) {
                console.log("\nCORRECT!!!\n")
            } else {
                console.log("\nINCORRECT!!!\n");
                console.log(remainingGuess + " guess(es) remaining!!!\n");
            }

            
            if (currentWord.word.every(item => item.guessed === true)) {

                console.log("\nYou got it right!\n");
                
                
                inquirer.prompt([
                    {
                        type: "confirm",
                        message: "Do you want to guess next word?",
                        name: "continue"
                    }
                ]).then(function (response) {

                    if (response.continue) { 
                        initGame();
                        playGame();
                    } else { 
                        console.log("\nThank you for playing!\n");
                        return false;
                    }
                });

            } else {  
                playGame();
            }
        });
    } else { 

        console.log("\nGame over, no more guesses!\n");

        
        inquirer.prompt([
            {
                type: "confirm",
                message: "Do you want to guess next word?",
                name: "continue"
            }
        ]).then(function (response) {
            if (response.continue) { 
                initGame();
                playGame();
            }
            else { 
                console.log("\nThank you for playing!\n");
                return false;
            }
        });
    }

}

playGame();