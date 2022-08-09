function getComputerChoice ()
{
    let computerChoice = ['rock', 'paper', 'scissors'];
    let randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    return randomChoice;
}

function playRound (playerSelection, computerSelection)
{
    if (playerSelection == computerSelection)
    {
        console.log('its a tie!');
    }
    else if 
    (
        playerSelection == 'rock' && computerSelection == 'paper' || 
        playerSelection == 'scissors' && computerSelection == 'rock' || 
        playerSelection == 'paper' && computerSelection == 'scissors' 
    )
    {
        console.log ('you lose');
    }
    else if
    (
        playerSelection == 'rock' && computerSelection == 'scissors' || 
        playerSelection == 'scissors' && computerSelection == 'paper' || 
        playerSelection == 'paper' && computerSelection == 'rock' 
    )
    {
        console.log ('you win');
    }
    else 
    {
        console.log ('error')
    }  
}

const playerSelection = window.prompt ('enter; rock, paper, or scissors');
const computerSelection = getComputerChoice();