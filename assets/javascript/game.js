
// Selects random number upon page load; number between 19 and 120
var randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// Sets random number on HTML
$("#randomNumber").text(randomNum);

// Also sets user score to 0
$('#score').text(0);
console.log(randomNum);

// Setting random numbers for each image/crystal; number between 1 and 12
var num1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var num2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var num3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var num4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

// Defining global variables
var userWins = 0;
var userLosses = 0;
var userScore = 0;

// Adds totals to HTML
$('#wins').text(userWins);
$('#losses').text(userLosses);

// Reset function declaration
function reset() {
	randomNum = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	console.log(randomNum);
	$('#randomNumber').text(randomNum);
	num1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	num2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	num3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	num4 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
	userScore = 0;
	$('#score').text(userScore);
}

// Winner function declaration to add to win tally on HTML
function winner() {
	alert("You Won!");
	userWins++;
	$('#wins').text(userWins);
	reset();
}

// Loser function declaration to add to loser tally on HTML
function loser() {
	alert("You Lost!");
	userLosses++;
	$('#losses').text(userLosses);
	reset()
}

// Click functions for each image/crystal
$('#crystal1').on('click', function () {
	userScore = userScore + num1;
	console.log("New userScore= " + userScore);
	$('#score').text(userScore);
	// If statement to call either winner or loser function
	if (userScore == randomNum) {
		winner();
	}
	else if (userScore > randomNum) {
		loser();
	}
})

$('#crystal2').on('click', function () {
	userScore = userScore + num2;
	console.log("New userScore= " + userScore);
	$('#score').text(userScore);
	// If statement to call either winner or loser function
	if (userScore == randomNum) {
		winner();
	}
	else if (userScore > randomNum) {
		loser();
	}
})

$('#crystal3').on('click', function () {
	userScore = userScore + num3;
	console.log("New userScore= " + userScore);
	$('#score').text(userScore);
	// If statement to call either winner or loser function
	if (userScore == randomNum) {
		winner();
	}
	else if (userScore > randomNum) {
		loser();
	}
})

$('#crystal4').on('click', function () {
	userScore = userScore + num4;
	console.log("New userScore= " + userScore);
	$('#score').text(userScore);
	// If statement to call either winner or loser function
	if (userScore == randomNum) {
		winner();
	}
	else if (userScore > randomNum) {
		loser();
	}
})