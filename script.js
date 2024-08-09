let computerScore = 0,
    humanScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    let choice;
    let message = "Rock, paper, or scissors?";
    while (true) {
        choice = prompt(message);
        choice = choice.toLowerCase();
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        } else {
            message = "That's not one of the choices! Rock, paper, or scissors?";
        }
    }
}