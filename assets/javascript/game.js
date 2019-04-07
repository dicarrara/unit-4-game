        // choose random number from 19-120 and show it on a screen
        // we need 4 cristals with a random assign value from 1-12. Cristals should be shown on a screen    
        // everytime user press the button value of cristals will go to the array "your total score", so value + 
        // if total score === random number, than person win, if > than random number user lose.
        // restart the game when player win or lose. With a new random number and new value for cristals.


$(document).ready(function () {

    var score = 0;
    var randomNumber = [];
    wins = 0;
    loses = 0;
    
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "../images/Saxophone.mp3");




    function restartGame() {
        score = 0;
        $("yourscore").text(score);
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $("#randomNumber-text").text("Number to match: " + randomNumber);

        // how will we do for only 4 cristals and dif value of 1-12?
        // for (var i = 0; i < 1; i++) {

        

        var randomValueCrystal1 = Math.floor(Math.random() * 12) + 1;
        console.log("this is our random value for crystal1 " + randomValueCrystal1);
        $("#crystal1").attr("data-info", randomValueCrystal1);

        var randomValueCrystal2 = Math.floor(Math.random() * 12) + 1;
        console.log("this is our random value for crystal2 " + randomValueCrystal2);
        $("#crystal2").attr("data-info", randomValueCrystal2);

        var randomValueCrystal3 = Math.floor(Math.random() * 12) + 1;
        console.log("this is our random value for crystal3 " + randomValueCrystal3);
        $("#crystal3").attr("data-info", randomValueCrystal3);


        var randomValueCrystal4 = Math.floor(Math.random() * 12) + 1;
        console.log("this is our random value for crystals4 " + randomValueCrystal4);
        $("#crystal4").attr("data-info", randomValueCrystal4);

    }

    restartGame();


    $(".img-fluid").on("click", function () {
        
        var crystalValue = ($(this).attr("data-info"));
        crystalValue = parseInt(crystalValue);
        score += crystalValue;
        $("#yourscore").text("Your score is: " + score);
        checkwin();

    });

    

    function checkwin() {
        if (score === randomNumber) {
            wins += 1;
            $("#wins").text("You win " + wins);
            alert("Win Win Win");
            restartGame();
        } else if (score > randomNumber) {
            loses += 1;
            $("#loses").text("You lose " + loses);
            alert("you lost");
            restartGame();
        }

    }
});

