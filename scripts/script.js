const humanUI = document.querySelector("#ui__human");
const humanChoiceImg = document.querySelector(".ui__choice--human > img");
const computerChoiceImg = document.querySelector(".ui__choice--computer > img");

humanUI.addEventListener("click", (e) => {
    let target = e.target;
    let parent = target.parentElement;
    let classes = parent.classList;
    let choice;

    if (classes.contains("ui__rock")) {
        choice = "Rock";
    } else if (classes.contains("ui__paper")) {
        choice = "Paper";
    } else if (classes.contains("ui__scissors")) {
        choice = "Scissors";
    }

    if (choice !== null) {
        playRound(getComputerChoice(), choice);
    }
});

function playRound(computerChoice, humanChoice) {
    updateVersus(computerChoice, humanChoice);
    // if ((computerChoice === "Rock" && humanChoice === "Scissors")
    //     || (computerChoice === "Paper" && humanChoice === "Rock")
    //     || (computerChoice === "Scissors" && humanChoice === "Paper")) {
    //         ++computerScore;
    //         console.log(`You lose this round! ${computerChoice} beats ${humanChoice}!`);
    // } else if ((humanChoice === "Rock" && computerChoice === "Scissors")
    //     || (humanChoice === "Paper" && computerChoice === "Rock")
    //     || (humanChoice === "Scissors" && computerChoice === "Paper")) {
    //         ++humanScore;
    //         console.log(`You win this round! ${humanChoice} beats ${computerChoice}!`);
    // } else {
    //     console.log(`${computerChoice} and ${humanChoice} -- it's a tie!`);
    // }
}

// function playGame() {
//     let computerScore = 0,
//         humanScore = 0,
//         roundCount = 1;

//     while (roundCount <= 5) {
//         playRound(getComputerChoice(), getHumanChoice());
//     }

//     console.log((computerScore > humanScore)
//         ? `The computer wins with a score of ${computerScore}-${humanScore}!`
//         : `You won with a score of ${humanScore}-${computerScore}!`);
// }

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        default:
            return "Scissors"
    }
}

function updateVersus(computerChoice, humanChoice) {
    switch (humanChoice) {
        case "Rock":
            humanChoiceImg.setAttribute("src", "./images/rock-human.svg");
            break;
        case "Paper":
            humanChoiceImg.setAttribute("src", "./images/paper-human.svg");
            break;
        default:
            humanChoiceImg.setAttribute("src", "./images/scissors-human.svg");
    }

    switch (computerChoice) {
        case "Rock":
            computerChoiceImg.setAttribute("src", "./images/rock-computer.svg");
            break;
        case "Paper":
            computerChoiceImg.setAttribute("src", "./images/paper-computer.svg");
            break;
        default:
            computerChoiceImg.setAttribute("src", "./images/scissors-computer.svg");
    }
}