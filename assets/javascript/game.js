$(document).ready(function () {

    var score = 0;
    var randomNumber = [];
    wins = 0;
    loses = 0;

    var audio=document.createElement("audio");
    audio.setAttribute("src", "assets/images/Saxophone.mp3");


    function frankPlaying() {
        // $("#notes").html('<img src="../images/frank2.png">');
        audio.play();

    }

    function restartGame() {

        score = 0;
        $("yourscore").text(score);
        randomNumber = Math.floor(Math.random() * 120) + 19;
        $("#randomNumber-text").text("Number to match: " + randomNumber);


        audio.pause();
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
            Swal.fire({
                imageUrl: 'assets/images/sac.png',
                imageHeight: 150,
                imageAlt: 'Frank image',
                background: "#F1DBFF",
                text: "Good job! ",
                                       
            })

            frankPlaying() ;
            // restartGame();
        } else if (score > randomNumber) {
            loses += 1;
            $("#loses").text("You lose " + loses);
            Swal.fire({
                text: "Try one more time!",
            })
            restartGame();
        }

    }


});
