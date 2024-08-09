let computerScore = 0,
    humanScore = 0;

function playRound(computerChoice, humanChoice) {
    if ((computerChoice === "Rock" && humanChoice === "Scissors")
        || (computerChoice === "Paper" && humanChoice === "Rock")
        || (computerChoice === "Scissors" && humanChoice === "Paper")) {
            ++computerScore;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors")
        || (humanChoice === "Paper" && computerChoice === "Rock")
        || (humanChoice === "Scissors" && computerChoice === "Paper")) {
            ++humanScore;
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else {
        console.log(`${computerChoice} and ${humanChoice} -- it's a tie!`);
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

function getHumanChoice() {
    let choice;
    let message = "Rock, paper, or scissors?";
    while (true) {
        choice = prompt(message);
        // Convert to capitalized form
        choice = choice.charAt(0).toUpperCase() + choice.toLowerCase().slice(1);
        if (choice === "Rock" || choice === "Paper" || choice === "Scissors") {
            return choice;
        } else {
            message = "That's not one of the choices! Rock, paper, or scissors?";
        }
    }
}