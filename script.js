console.log("Test");

var wins = 0;
var losses = 0;
var ties = 0;

//Ask to play the game
var wantToPlay = confirm("Hello! Click okay if you would like to play Rock, Paper, Scissors:");

//Play the Game function
var play = function () {

    //Choice options
    const options = ["R", "P", "S"];

    //Prompt player for choice
    var playerChoice = prompt("Choose: R, P, or S.");
    
    //Ask for input if choice isn't valid
    while (options.indexOf(playerChoice)===-1) {
         playerChoice = prompt("Please enter a valid choice: R, P, or S. Capital letters only please :)");
    }   

    //Random function
    function getRandom(arr) {
        var random = Math.floor(Math.random() * arr.length);
        var item = arr[random];
        return item;
    }
    
    //Computer chooses
    var computerChoice = getRandom(options);
    
    //Display computer choice
    alert(`The Computer chose ${computerChoice}.`);

    //Scoring
    if (playerChoice === computerChoice) {
        alert("It's a tie!");
        ties++;
    }   else if ((playerChoice === "R" && computerChoice === "P") || (playerChoice === "P" && computerChoice === "S") || (playerChoice === "S" && computerChoice === "R")) {
        alert("You lost!");
        losses++;
    }   else if ((playerChoice === "R" && computerChoice === "S") || (playerChoice === "P" && computerChoice === "R") || (playerChoice === "S" && computerChoice === "P")) {
        alert("You won!");
        wins++;
    }

    //Display score
    alert(
        `Wins = ${wins}\nLosses = ${losses}\nTies = ${ties}`
    )

    //Ask to play again
    var playAgain = confirm("Would you like to play again?");

    //Evaluate choice to play again
    if (playAgain) {
        play();
    } else {
        goodbye();
    }

}


//Evaluate Choice to play
if (wantToPlay) {
    play();
} else {
    goodbye();
}

//Player chose not to play
function goodbye() {
    confirm("Okay, have a nice day!");
}