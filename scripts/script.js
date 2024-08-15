const humanUI = document.querySelector("#ui__human");
const humanChoiceImg = document.querySelector(".ui__choice--human > img");
const computerChoiceImg = document.querySelector(".ui__choice--computer > img");
const humanScore = document.querySelector(".score__digit--human");
const computerScore = document.querySelector(".score__digit--computer");
const detailText = document.querySelector("#detail > p");

const getHumanChoice = (e) => {
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
};

humanUI.addEventListener("click", getHumanChoice);

function playRound(computerChoice, humanChoice) {
    let gameEnd = false;
    updateVersus(computerChoice, humanChoice);
    if ((computerChoice === "Rock" && humanChoice === "Scissors")
        || (computerChoice === "Paper" && humanChoice === "Rock")
        || (computerChoice === "Scissors" && humanChoice === "Paper")) {
            gameEnd = updateScore("Computer");
            if (!gameEnd) updateDetail(`You lose this round! ${computerChoice} beats ${humanChoice}!`);
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors")
        || (humanChoice === "Paper" && computerChoice === "Rock")
        || (humanChoice === "Scissors" && computerChoice === "Paper")) {
            gameEnd = updateScore("Human");
            if (!gameEnd) updateDetail(`You win this round! ${humanChoice} beats ${computerChoice}!`);
    } else {
        updateDetail(`${computerChoice} and ${humanChoice} -- it's a tie!`);
    }
}

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

function updateScore(roundWinner) {
    let currScore;
    if (roundWinner === "Computer") {
        currScore = parseInt(computerScore.textContent);
        ++currScore;
        computerScore.textContent = currScore;
        if (currScore === 5) {
            finishGame("Computer");
            return true;
        }
    } else {
        currScore = parseInt(humanScore.textContent);
        ++currScore;
        humanScore.textContent = currScore;
        if (currScore === 5) {
            finishGame("Human");
            return true;
        }
    }
    return false;
}

function finishGame(winner) {
    if (winner === "Computer") {
        updateDetail(`The computer wins!`);
    } else {
        updateDetail(`You win!`);
    }
    humanUI.removeEventListener("click", getHumanChoice);
}

function updateDetail(info) {
    detailText.textContent = info;
}