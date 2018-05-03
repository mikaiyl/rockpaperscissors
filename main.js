function appendToDoc(appendage, parent) {
    document.getElementById(parent).appendChild(appendage);
}

function createInputHTML() {
    const inputButtonRock = document.createElement("button");
    const inputButtonPaper = document.createElement("button");
    const inputButtonScissors = document.createElement("button");

    inputButtonRock.textContent = "rock";
    inputButtonPaper.textContent = "paper";
    inputButtonScissors.textContent = "scissors";

    [ inputButtonRock, inputButtonPaper, inputButtonScissors ].forEach((button) => {
        appendToDoc( button, "input");
    });
}

function createOutputHTML(output) {
    const pOutput = document.createElement("p");
    pOutput.textContent = "Round over: " + output;
    appendToDoc( pOutput, "output");

}

    /*
     *      Includes
     */

const choices = {
    rock: {
        name: "rock",
        rock: 0,
        paper: 1,
        scissors: 2
    },
    paper: {
        name: "paper",
        rock: 2,
        paper: 0,
        scissors: 1
    },
    scissors: {
        name: "scissors",
        rock: 2,
        paper: 1,
        scissors: 0
    }
}

function getInputFromUser() {
    let input = "";
    document.querySelectorAll("button").forEach(( button ) => {
        button.addEventListener("click", () => {
            input =  button.textContent;
            createOutputHTML(getWinner(input, getRandomChoice()));
        });
    });
}

function getRandomChoice() {
    let choice = Math.random();
    if ( choice < 1/3 ) {
        return "rock";
    } else if (choice > (1/3)*2 ) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getWinner(playerOne, playerTwo) {
    let playerOneChoices = choices[playerOne];
    let playerTwoChoices = choices[playerTwo];
    if ( playerOneChoices[playerTwoChoices.name] == 0 ) {
        return "Tie";
    } else if (playerOneChoices[playerTwoChoices.name] == 1) {
        return "Player Two Wins!";
    } else if (playerOneChoices[playerTwoChoices.name] == 2) {
        return "Player One Wins!";
    } else {
        return "Unrecognized option";
    }
}

    /*
     *      Setup
     */



    /*
     *      Main
     */

( () => {
    // get user input
    //
    createInputHTML();
    getInputFromUser();
    // get comuper random choice
    //
    //
    // get winner.
    // createOutputHTML(getWinner(getInputFromUser(), getRandomChoice()));
    //
} )();
