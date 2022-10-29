/* ------- Test -----------------------
console.log(getComputerChoice());
console.log(playRound("Rock","Rock"));
console.log(playRound("Rock","Paper"));
console.log(playRound("Paper","Rock"));
*/

game();

function game()  {
  let userScore = 0;
  let botScore = 0;

  for (let i = 0; i < 5; i++) {
    alert(`Round ${i+1}:`);
    let playerChoice = prompt("Chose Rock, Paper or Scissor");
    let botChoice = getComputerChoice();
    console.log(`Player: ${playerChoice}`)
    console.log(`Bot: ${botChoice}`)
    let result = playRound(playerChoice, botChoice);
    console.log(`Result: ${result}`)
    console.log("-------------------------")
    if (result === "You Win!") {
      userScore++;
    } else if (result === "You Lose!") {
      botScore++;
    }
  }
  console.log("Final Result:");
  console.log(`Player: ${userScore}`);
  console.log(`Bot: ${botScore}`);
}

function getComputerChoice() {
  let bot = Math.round(Math.random() * (3 - 1)) + 1;
  switch (bot) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissor";
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
