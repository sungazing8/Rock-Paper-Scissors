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

function compareChoices(){
    const finalComputerChoice = getComputerChoice(3);
    console.log(finalComputerChoice);
    const finalUserChoice = getHumanChoice();
    console.log(finalUserChoice);

  
}    

compareChoices();