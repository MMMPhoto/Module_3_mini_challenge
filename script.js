console.log("Test");

var wantToPlay = confirm("Hello! Click okay if you would like to play Rock, Paper, Scissors:");

//Player chose not to play
function goodbye() {
    confirm("Okay, have a nice day!");
}

//Play the Game function
var play = function () {

    //Prompt player for choice
    var playerChoice = prompt("Choose: R, P, or S.");

    //Random function
    function getRandom(arr) {
        var random = Math.floor(Math.random() * arr.length);
        var item = arr[random];
        return item;
    }
    
    //Computer choice options
    const options = ["R", "P", "S"];
    
    //Computer chooses
    var makeChoice = getRandom(options);
    console.log(makeChoice);
    
    //Display computer choice
    alert(`The Computer chose ${makeChoice}.`);


}

//Ask to play the game
if (wantToPlay) {
    play();
} else {
    goodbye();
}