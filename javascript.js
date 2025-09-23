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

function playRound(){
    const finalComputerChoice = getComputerChoice(3);
    console.log(finalComputerChoice);
    const finalUserChoice = getHumanChoice();
    console.log(finalUserChoice);

    if(finalUserChoice === "rock" && finalComputerChoice === "scissors"){
        console.log ("rock beats scissors, you win this round!"); 
    }  else if (finalUserChoice === "paper" && finalComputerChoice === "rock"){
        console.log("paper beats rock, you win this round");
    }  else if (finalUserChoice === "scissors" && finalComputerChoice === "paper"){
        console.log("scissors beats paper, you win this round");
    }  else if (finalUserChoice === "rock" && finalComputerChoice === "paper"){
        console.log("paper beats rock, you lose this round");
    }  else if (finalUserChoice === "paper" && finalComputerChoice === "scissors"){
        console.log("scissors beats paper, you lose this round");
    }  else if (finalUserChoice === "scissors" && finalComputerChoice === "rock"){
        console.log("rock beats scissors, you lose this round");
    }  else {
        console.log("this ones a draw, go again");
    }
      
    
}    

playRound();