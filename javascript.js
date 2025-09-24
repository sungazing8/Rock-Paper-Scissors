function getComputerChoice(max){
    const randomNumber = Math.floor(Math.random() * max);

    if (randomNumber === 0){
        return ("rock");
    } else if (randomNumber === 1){
        return ("paper");
    } else {
        return ("scissors");
    }
}

function getHumanChoice(){
    const userPrompt = prompt ("please choose either rock, paper, or scissors");
    let userChoice = userPrompt.toLowerCase();
    return (userChoice);
}

let humanScore = 0;
let computerScore = 0;

function playRound(){
    const finalComputerChoice = getComputerChoice(3);
    const finalUserChoice = getHumanChoice();

    if(finalUserChoice === "rock" && finalComputerChoice === "scissors"){
        console.log ("rock beats scissors, you win this round!" + " you have " + humanScore +1 + " points"); 
        return (humanScore + 1); 

    }  else if (finalUserChoice === "paper" && finalComputerChoice === "rock"){ 
        console.log("paper beats rock, you win this round!" + " you have " + humanScore +1 + " points");
        return (humanScore + 1);

    }  else if (finalUserChoice === "scissors" && finalComputerChoice === "paper"){
        console.log("scissors beats paper, you win this round" + " you have " + humanScore +1 + " points");
        return (humanScore + 1);

    }  else if (finalUserChoice === "rock" && finalComputerChoice === "paper"){
        console.log("paper beats rock, you lose this round" + " computer has " + computerScore +1 + " points");
        return (computerScore + 1);

    }  else if (finalUserChoice === "paper" && finalComputerChoice === "scissors"){
        console.log("scissors beats paper, you lose this round" + " computer has " + computerScore +1 + " points");
        return (computerScore + 1);

    }  else if (finalUserChoice === "scissors" && finalComputerChoice === "rock"){
        console.log("rock beats scissors, you lose this round" + " computer has " + computerScore +1 + " points");
        return (computerScore + 1);

    }  else {
        console.log("this ones a draw, go again");
    }
       
}    

playRound ();


