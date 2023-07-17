let answer = Math.trunc(Math.random() * 100) + 1;
let score = 10,
	highScore = 0;
let historyArr = [];

let tooHighIcon = "icons/arrow-circle-up-solid.svg",
	tooLowIcon = "icons/arrow-circle-down-solid.svg",
	noNumberIcon = "icons/exclamation-triangle-solid.svg",
	duplicatedIcon = "icons/exclamation-triangle-solid.svg"
	failIcon = "icons/dizzy-solid.svg",
	correctIcon = "icons/thumbs-up-solid.svg";

let tooHighMsg = "Number too High!!",
	tooLowMsg = "Number too Low!",
	noNumberMsg = "Please enter a number!",
	duplicatedMsg = "Try other number!",
	failMsg = "Fail!",
	correctMsg = "Correct!";




function checkAns() {
	let value = document.getElementById("numberInput").value;
	if (value == '') {
		showHint(noNumberIcon, noNumberMsg);
	} else {
		value = parseInt(value, 10);
		if (historyArr.indexOf(value) != -1) {
			showHint(duplicatedIcon, duplicatedMsg);
		} else {
			historyArr.push(value);
			value == answer ? correct() : giveHint(value);
		}
	}
}

// Check the input value, if it's outside the range, set it to a default value
function checkNumRange(value) {
	let input = document.getElementById("numberInput");
	if (value != '') {
		if (value < 1) {
			input.value = 1;
		} else if (value > 100) {
			input.value = 100;
		}
	}
}


function giveHint(value) {
	score--;
	document.getElementById("score").innerText = score;
	if (score == 0) {
		gameOver();
	} else {
		value > answer ? showHint(tooHighIcon, tooHighMsg) : showHint(tooLowIcon, tooLowMsg);
		value > answer ? addHistory(value, tooHighIcon) : addHistory(value, tooLowIcon);
	}
}


function showHint(icon, message) {
	let hint = `<img src=${icon}><h3 class='hint'>${message}</h3>`;
	document.getElementById("hint-div").innerHTML = hint;
}

function addHistory(value, icon){
	let newHistory = `<div class='history'><span>${value}</span><img src=${icon}></div>`
	let history = document.getElementById("guessingHistory");
	history.innerHTML = newHistory + history.innerHTML;
}


// Change the style when user gets the correct answer
function correct() {
	stopTheGame();
	showHint(correctIcon, correctMsg);
	document.getElementById("bigContainer").style.background = correctBackground;
}


// Change the style when user fail to get the correct number
function gameOver() {
	stopTheGame();
	showHint(failIcon, failMsg);
	document.getElementById("bigContainer").style.background = failBackground;
}


// Disable the input field
function stopTheGame() {
	// Update the high score
	highScore = Math.max(score, highScore);
	document.getElementById("highscore").innerText = highScore;

	// When user gets the correct answer, disable the check button
	let checkBtn = document.getElementById("checkBtn");
	checkBtn.disabled = true;
	checkBtn.style.cursor = "unset";
	checkBtn.style.border = "2px solid gray";
	checkBtn.style.backgroundColor = "lightgrey";

	// When user gets the correct answer, disable the input box
	document.getElementById("numberInput").disabled = true;

	// Change the answer box size and color
	let answerBox = document.getElementById("answerBox");
	answerBox.style.width = "20vmin";
	answerBox.style.backgroundColor = "lightcoral";

	// Show the answer to user
	document.getElementById("answer").innerText = answer;
}


// Reset everything to initial
function startOver() {
	// Set a new number
	answer = Math.trunc(Math.random() * 100) + 1;

	// Reset the answer box and hint
	document.getElementById("hint-div").innerHTML = "<h3 class='hint'>Let's Start Guessing...</h3>"
	document.getElementById("answer").innerText = "?";

	// Reset the score
	score = 10;
	document.getElementById("score").innerText = score;

	// Reset the history
	document.getElementById("guessingHistory").innerHTML = "";
	historyArr = [];

	// Reset the check button
	let checkBtn = document.getElementById("checkBtn");
	checkBtn.disabled = false;
	checkBtn.style.cursor = "pointer";
	checkBtn.style.border = "2px solid yellow";
	checkBtn.style.backgroundColor = "lightblue";

	// Reset the input box
	let inputBox = document.getElementById("numberInput");
	inputBox.disabled = false;
	inputBox.value = "";

	// Reset the answer box size and color
	let answerBox = document.getElementById("answerBox");
	answerBox.style.width = "10vmin";
	answerBox.style.backgroundColor = "white";

	// Reset the background color
	document.getElementById("bigContainer").style.background = initialBackground;
}


function updateOutput(){
	var slider = document.getElementById("numberInputSlide")
	var output = document.getElementById("numberInput");
	output.value = slider.value;
}

function updateSlide(){
	var slider = document.getElementById("numberInputSlide")
	var output = document.getElementById("numberInput");
	slider.value = output.value;
}