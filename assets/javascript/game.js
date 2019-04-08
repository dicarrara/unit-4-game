$(document).ready(function () {

    var score = 0;
    var randomNumber = [];
    wins = 0;
    loses = 0;

    // var audio = document.createElement("audio");
    // audioElement.setAttribute("src", "Saxophone.mp3");


    // function frankPlaying() {
    //     // $("#notes").html('<img src="../images/frank2.png">');
    //     audioElement.play();

    // }

    function restartGame() {

        score = 0;
        $("yourscore").text(score);
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $("#randomNumber-text").text("Number to match: " + randomNumber);


        // audioElement.pause();
        // $("#frank").hide();

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



    $("#button").on("click", function () {

        restartGame()

    });


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
            Swal.fire({
                imageUrl: 'sac.png',
                imageHeight: 150,
                imageAlt: 'A tall image'
              })
            // frankPlaying();
            // restartGame();
        } else if (score > randomNumber) {
            loses += 1;
            $("#loses").text("You lose " + loses);
            alert("you lost");
            restartGame();
        }

    }


});