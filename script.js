/* ------- Test -----------------------
console.log(getComputerChoice());
console.log(playRound("Rock","Rock"));
console.log(playRound("Rock","Paper"));
console.log(playRound("Paper","Rock"));
*/

let player = prompt("Chose Rock, Paper or Scissor");
console.log(playRound(player, getComputerChoice()));

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
