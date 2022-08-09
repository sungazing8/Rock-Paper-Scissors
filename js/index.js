function getComputerChoice ()
{
    let computerChoice = ['rock', 'paper', 'scissors'];
    let randomElement = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    console.log(randomElement);
}

function playRound (playerSelection, computerSelection)
{
      
}

const playerSelection = window.prompt ('enter; rock, paper, or scissors');
const computerSelection = getComputerChoice();