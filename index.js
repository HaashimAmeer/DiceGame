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
  //   console.log(randNum);

  if (playerOneTurn) {
    playerOneDice.textContent = randNum + ""; //updated dice number
    playerOneScore += randNum; //adding to running sum
    playerOneScoreText.textContent = playerOneScore + ""; //updating text of running sum
    playerOneDice.classList.remove("active");
    playerTwoDice.classList.add("active");
    playerTurnText.textContent = "Player 2 Turn";
  } else {
    playerTwoDice.textContent = randNum + ""; //updated dice number
    playerTwoScore += randNum; //adding to running sum
    playerTwoScoreText.textContent = playerTwoScore + ""; //updating text of running sum
    playerTwoDice.classList.remove("active");
    playerOneDice.classList.add("active");
    playerTurnText.textContent = "Player 1 Turn";
  }
  playerOneTurn = !playerOneTurn; //switching player
});
