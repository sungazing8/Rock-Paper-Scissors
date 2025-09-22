function getComputerChoice(max){
    const randomNumber = Math.floor(Math.random() * max);

    if (randomNumber === 0){
        return ("computer chose rock");
    } else if (randomNumber === 1){
        return ("computer chose paper");
    } else {
        return ("computer chose scissors");
    }
}

function getHumanChoice(){
    const userPrompt = prompt ("please choose either rock, paper, or scissors");
    let userChoice = userPrompt.toLowerCase();
    return ("player chose" + " " + userChoice);
}

function compareChoices(){
    const finalComputerChoice = getComputerChoice(3);
    console.log(finalComputerChoice);
    const finalUserChoice = getHumanChoice();
    console.log(finalUserChoice);
}    

compareChoices();