//game vars
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneTurn = true;

//DOM vars
const playerTurnText = document.querySelector("#message");
const playerOneScoreText = document.querySelector("#player1Scoreboard");
const playerOneDice = document.querySelector("#player1Dice");
const playerTwoScoreText = document.querySelector("#player2Scoreboard");
const playerTwoDice = document.querySelector("#player2Dice");
const rollButton = document.querySelector("#rollBtn");
const resetButton = document.querySelector("#resetBtn");

//random number generator
rollButton.addEventListener("click", function () {
  let randNum = Math.floor(Math.random() * 6 + 1);
  console.log(randNum);

  if (playerOneTurn) {
    console.log("player one rolled " + randNum);
  } else {
    console.log("player two rolled " + randNum);
  }
  playerOneTurn = !playerOneTurn;
});
