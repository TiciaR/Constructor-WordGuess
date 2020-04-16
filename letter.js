var Letter = function (letter) {

        this.letter = letter;
    
        this.guessed = false;
    
        this.renderLetter = function () {
            if (this.guessed) { return this.letter; } 
            else { return "_"; }
        };
    
        this.checkLetter = function (userLetter) {
            if (userLetter === this.letter) {
                this.guessed = true;
            }
        };
    
    }
    
    module.exports = Letter;
    