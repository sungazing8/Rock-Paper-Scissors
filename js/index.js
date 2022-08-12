const computerChoice = ['rock', 'paper', 'scissors'];
const playerChoice = window.prompt('enter: rock, paper, or scissors');


function getComputerChoice ()
{
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}


function getPlayerChoice ()
{
    return playerChoice.toLowerCase();
}


const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function playRound (getPlayerChoice, getComputerChoice)
{

    if (playerSelection == computerSelection)
    {
        console.log('computer chose: ' + (computerSelection) + ', you chose: ' + (playerSelection));
        console.log('its a tie this time');
    }
    else if 
    (
        playerSelection == 'rock' && computerSelection == 'paper' || 
        playerSelection == 'scissors' && computerSelection == 'rock' || 
        playerSelection == 'paper' && computerSelection == 'scissors' 
    )
    {
        console.log('computer chose: ' + (computerSelection) + ', you chose: ' + (playerSelection));
        console.log ('you lose this one', + computerScore+1);
        return computerScore+1;
    }
    else if
    (
        playerSelection == 'rock' && computerSelection == 'scissors' || 
        playerSelection == 'scissors' && computerSelection == 'paper' || 
        playerSelection == 'paper' && computerSelection == 'rock' 
    )
    {
        console.log('computer chose: ' + (computerSelection) + ', you chose: ' + (playerSelection));
        console.log ('you win this one', + playerScore+1);
        return playerScore+1;
    }
    else 
    {
        console.log ('error')
    }  
}  

let scores = playRound();

function game (playRound, playerScore, computerScore)
{
    playRound();
    while (scores < 6)
    {
        if (playerScore == 5)
        {
            break;
            console.log('you are the winner')
        }
        else if (computerScore == 5)
        {
            console.log('the computer won')
            break;
        }
        else scores++;      
    }

    game();
}





    

