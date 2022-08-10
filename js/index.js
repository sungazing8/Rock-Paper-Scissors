const computerChoice = ['rock', 'paper', 'scissors'];
const playerChoice = ['rock', 'paper', 'scissors'];


function getComputerChoice ()
{
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}


function getPlayerChoice ()
{
    return playerChoice[Math.floor(Math.random() * playerChoice.length)];  
}


const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound (getPlayerChoice, getComputerChoice)
{

    if (playerSelection == computerSelection)
    {
        console.log('its a tie this time');
    }
    else if 
    (
        playerSelection == 'rock' && computerSelection == 'paper' || 
        playerSelection == 'scissors' && computerSelection == 'rock' || 
        playerSelection == 'paper' && computerSelection == 'scissors' 
    )
    {
        console.log ('you lose this one');
    }
    else if
    (
        playerSelection == 'rock' && computerSelection == 'scissors' || 
        playerSelection == 'scissors' && computerSelection == 'paper' || 
        playerSelection == 'paper' && computerSelection == 'rock' 
    )
    {
        console.log ('you win this one');
    }
    else 
    {
        console.log ('error')
    }  
}  






    

