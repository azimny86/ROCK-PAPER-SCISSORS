/**
 * Variables taken from the index page
 */
const playerScoreSpan = document.querySelector(".player-score");
const compScoreSpan = document.querySelector(".comp-score");
const optionsButtons = document.querySelectorAll(".choises");
const choicesSection = document.querySelector(".choices");
const playerChoiceSpan = document.querySelector(".player-choice");
const compChoiceSpan = document.querySelector(".comp-choice");
const resultText = document.querySelector(".result");
const resetGameButton = document.querySelector(".reset");


let playerScore = 0;
let playerChoice = "";
let compScore = 0;
let compChoice = "";

/**
 * Function prepare game for start
 */
function prepareGame() {
  playerScoreSpan.innerHTML = playerScore;
  compScoreSpan.innerHTML = compScore;
  resultText.innerHTML = "Choose from the options to start game !";
}

window.onload =prepareGame();

/**
 * Function opening alert window the rules of game
 * Rules model taking from https://www.w3schools.com/howto/howto_css_modals.asp
*/

var modal = document.getElementById("ruleModel");

var btn = document.getElementById("rules-button");

var span = document.getElementsByClassName("rules-close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}