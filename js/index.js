let computerChoice = ['rock', 'paper', 'scissors'];
let playerChoice = window.prompt('enter: rock, paper, or scissors');


function getComputerChoice ()
{
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}


function getPlayerChoice ()
{
    return playerChoice.toLowerCase();
}


let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;

function playRound (getPlayerChoice, getComputerChoice)
{

    if (playerSelection == computerSelection)
    {
        console.log('computer chose: ' + (computerSelection) + ', you chose: ' + (playerSelection));
        console.log('its a tie this time');
        alert ('its a tie this time');
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
        alert ('you lose this one');
        
        return computerScore+1;
    }
    else if
    (
        playerSelection == 'rock' && computerSelection == 'scissors' || 
        playerSelection == 'scissors' && computerSelection == 'paper' || 
        playerSelection == 'paper' && computerSelection == 'rock' 
    )
    {
        console.log('you chose: ' + (playerSelection) + ', computer chose: ' + (computerSelection));
        console.log ('you win this one', + playerScore+1);
        alert('you win this one');
        
        return playerScore+1;
    }
    else 
    {
        console.log ('error')
    }  
}  

// im struggling with this bit here - i want to pass the return values
// of playerScore and computerScore from playRound() into game()

let scoreUpdate = playRound();

function game ()
{
    if (playerScore = 1 || computerScore == 1)
    {
      console.log (computerScore, playerScore);
    }
}






    

