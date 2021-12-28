//game vars
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneTurn = true;

//DOM vars
const playerTurnText = document.getElementById("message");
const playerOneScoreText = document.getElementById("player1Scoreboard");
const playerOneDice = document.getElementById("player1Dice");
const playerTwoScoreText = document.getElementById("player2Scoreboard");
const playerTwoDice = document.getElementById("player2Dice");
const rollButton = document.getElementById("rollBtn");
const resetButton = document.getElementById("resetBtn");

//random number generator
rollButton.addEventListener("click", function () {
  let randNum = Math.floor(Math.random() * 6 + 1);

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

  if (playerOneScore > 20 || playerTwoScore > 20) {
    if (playerOneScore >= 20) {
      playerTurnText.textContent = "Player 1 has won!";
    } else {
      playerTurnText.textContent = "Player 2 has won!";
    }
    rollButton.style.display = "none";
    resetButton.style.display = "block";
  }
});
