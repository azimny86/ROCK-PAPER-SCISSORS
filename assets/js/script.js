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