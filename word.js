var Letter = require("./Letter");

var Word = function (word) {

    this.word = [];
    
    
    for (var i = 0; i < word.length; i++) {
        var newLetter = new Letter(word[i]);
        this.word.push(newLetter);
    }
    
    
    this.renderWord = function () {
        var wordString = "";

        this.word.forEach(item => wordString += item.renderLetter() + " ");

        console.log("\n" + wordString + "\n");
    };
    
    
    this.checkWord = function (userGuessed) {
        this.word.forEach(item => item.checkLetter(userGuessed));
    };

}

module.exports = Word;