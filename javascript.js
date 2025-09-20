function getComputerChoice(max){
    const randomNumber = Math.floor(Math.random() * max);

    if (randomNumber === 0){
        console.log("computer chose rock");
    } else if (randomNumber === 1){
        console.log("computer chose paper");
    } else {
        console.log("computer chose scissors");
    }
}

getComputerChoice(3);