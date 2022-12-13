/**
 * Variables taken from the index page
 */
const playerScoreSpan = document.querySelector(".player-score");
const compScoreSpan = document.querySelector(".comp-score");
const optionsButtons = document.querySelectorAll(".options");
const choicesSection = document.querySelector(".choises");
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

window.onload = prepareGame();

/**
 * Function add active class CSS and store player choice in variable and activating the selection by comp
 */
function playerSelection(event) {
  optionsButtons.forEach((button) => button.classList.remove("active"));
  playerChoice = event.target.dataset.options;
  event.target.classList.add("active");
  resetGameButton.classList.add("active");
  
  compSelection()
}
/**
 * Variable to keep options available for Comp
 */
const CompAvailableSelection = ['ROCK','PAPER','SCISSORS','LIZARD','SPOCK']

/**
 * Selection of a random option for comp in the game
 */

function compSelection() {
  const random = Math.floor(Math.random()* CompAvailableSelection.length)
  compChoice = CompAvailableSelection[random];
  checkWinner()
}

/**
 * Function declares a win, loss or draw
 */
function checkWinner() {
  let winner = '';
/**
 * Game rules
 */
  if(
    (playerChoice === 'SCISSORS'  && compChoice === 'PAPER') || 
    (playerChoice === 'PAPER'  && compChoice ==='ROCK') || 
    (playerChoice ==='ROCK' && compChoice ==='LIZARD') ||
    (playerChoice ==='LIZARD' && compChoice ==='SPOCK') ||
    (playerChoice ==='SPOCK' && compChoice ==='SCISSORS') ||
    (playerChoice  === 'SCISSORS' && compChoice === 'LIZARD' ) ||
    (playerChoice  === 'LIZARD' && compChoice === 'PAPER' ) ||
    (playerChoice  === 'PAPER' && compChoice === 'SPOCK' ) ||
    (playerChoice  === 'SPOCK' && compChoice === 'ROCK' ) ||
    (playerChoice  === 'ROCK' && compChoice === 'SCISSORS' )
  )
{
winner = "Player Win !";
playerScore++;
playerScoreSpan.innerHTML = playerScore;

}else if (playerChoice === compChoice) {
  winner = 'Draw!'
}else {
  winner = 'Sorry , but this time you LOST!'
  compScore++;
  compScoreSpan == compScore;
  compScoreSpan.innerHTML = compScore;
}
playerChoiceSpan.innerHTML = playerChoice;
compChoiceSpan.innerHTML = compChoice;
resultText.innerHTML = winner;
}

optionsButtons.forEach((button) => button.addEventListener('click', playerSelection))



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