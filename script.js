function gamePlay() {
  let userScore = 0;
  let botScore = 0;
  let round = 0;

  updateScore();

  function updateScore() {
    document.getElementById(
      "scores"
    ).innerHTML = `Player: ${userScore} \xa0\xa0\xa0 Bot: ${botScore} \xa0\xa0\xa0 Round: ${round}`;
  }

  document.getElementById("rock").onclick = function rockPlay() {
    let botChoice = getComputerChoice();
    let result = playRound("Rock", botChoice);
    playResult(result);
    alert(` You played Rock \n Bot played ${botChoice}`);
  };

  document.getElementById("paper").onclick = function paperPlay() {
    let botChoice = getComputerChoice();
    let result = playRound("Paper", botChoice);
    playResult(result);
    alert(` You played Paper \n Bot played ${botChoice}`);
  };

  document.getElementById("scissor").onclick = function scissorPlay() {
    let botChoice = getComputerChoice();
    let result = playRound("scissor", botChoice);
    playResult(result);
    alert(` You played Scissor \n Bot played ${botChoice}`);
  };

  function playResult(result) {
    if (result == "You Win!") {
      userScore++;
      round++;
    } else if (result == "You Lose!") {
      botScore++;
      round++;
    }
    updateScore();
  }

  document.getElementById("restart").onclick = function restartScore() {
    userScore = 0;
    botScore = 0;
    round = 0;
    updateScore();
  };
}


function getComputerChoice() {
  let bot = Math.round(Math.random() * (3 - 1)) + 1;
  switch (bot) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissor";
      break;
    default:
      break;
  }
}

function playRound(player, bot) {
  player = player.toLowerCase();
  bot = bot.toLowerCase();

  if (player === bot) {
    return "Tie!";
  } else if (
    (player === "rock" && bot === "scissor") ||
    (player === "paper" && bot === "rock") ||
    (player === "scissor" && bot === "paper")
  ) {
    return "You Win!";
  } else if (
    (bot === "rock" && player === "scissor") ||
    (bot === "paper" && player === "rock") ||
    (bot === "scissor" && player === "paper")
  ) {
    return "You Lose!";
  } else return "Invalid Play!";
}
