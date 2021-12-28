//game vars
let p1_score = 0;
let p2_score = 0;
let p1_turn = true;

//DOM vars
const message = document.getElementById("message");
const p1_dice = document.getElementById("player1Dice");
const p2_dice = document.getElementById("player2Dice");
const p1_scoreboard = document.getElementById("player1Scoreboard");
const p2_scoreboard = document.getElementById("player2Scoreboard");
const rollButton = document.getElementById("rollBtn");
const resetButton = document.getElementById("resetBtn");

//random number generator
rollButton.addEventListener("click", function () {
  let randNum = Math.floor(Math.random() * 6 + 1);

  if (p1_turn) {
    p1_dice.textContent = randNum + ""; //updated dice number
    p1_score += randNum; //adding to running sum
    p1_scoreboard.textContent = p1_score + ""; //updating text of running sum
    p1_dice.classList.remove("active");
    p2_dice.classList.add("active");
    message.textContent = "Player 2 Turn";
  } else {
    p2_dice.textContent = randNum + ""; //updated dice number
    p2_score += randNum; //adding to running sum
    p2_scoreboard.textContent = p2_score + ""; //updating text of running sum
    p2_dice.classList.remove("active");
    p1_dice.classList.add("active");
    message.textContent = "Player 1 Turn";
  }
  p1_turn = !p1_turn; //switching player

  if (p1_score >= 20 || p2_score >= 20) {
    if (p1_score >= 20) {
      message.textContent = "Player 1 has won!";
    } else {
      message.textContent = "Player 2 has won!";
    }
    rollButton.style.display = "none";
    resetButton.style.display = "block";
  }
});

resetButton.addEventListener("click", function () {
  p1_score = 0;
  p2_score = 0;
  p1_turn = true;
  message.textContent = "Player 1 Turn";
  p1_scoreboard.textContent = "0";
  p2_scoreboard.textContent = "0";
  p1_dice.textContent = "-";
  p2_dice.textContent = "-";
  resetButton.style.display = "none";
  rollButton.style.display = "block";
  p1_dice.classList.add("active");
  p2_dice.classList.remove("active");
});
