const humanUI = document.querySelector("#ui__human");

humanUI.addEventListener("click", (e) => {
    let target = e.target;
    let parent = target.parentElement;
    let classes = parent.classList;
    let choice = "";

    if (classes.contains("ui__rock")) {
        choice = "Rock";
    } else if (classes.contains("ui__paper")) {
        choice = "Paper";
    } else if (classes.contains("ui__scissors")) {
        choice = "Scissors";
    }

    console.log(choice);
});

// playGame();

function playGame() {
    let computerScore = 0,
        humanScore = 0,
        roundCount = 1;

    function playRound(computerChoice, humanChoice) {
        if ((computerChoice === "Rock" && humanChoice === "Scissors")
            || (computerChoice === "Paper" && humanChoice === "Rock")
            || (computerChoice === "Scissors" && humanChoice === "Paper")) {
                ++computerScore;
                ++roundCount;
                console.log(`You lose this round! ${computerChoice} beats ${humanChoice}!`);
        } else if ((humanChoice === "Rock" && computerChoice === "Scissors")
            || (humanChoice === "Paper" && computerChoice === "Rock")
            || (humanChoice === "Scissors" && computerChoice === "Paper")) {
                ++humanScore;
                ++roundCount;
                console.log(`You win this round! ${humanChoice} beats ${computerChoice}!`);
        } else {
            console.log(`${computerChoice} and ${humanChoice} -- it's a tie!`);
        }
    }

    while (roundCount <= 5) {
        playRound(getComputerChoice(), getHumanChoice());
    }

    console.log((computerScore > humanScore)
        ? `The computer wins with a score of ${computerScore}-${humanScore}!`
        : `You won with a score of ${humanScore}-${computerScore}!`);
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