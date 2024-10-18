/* Mema Pseudocode 
Create function getComputerChoice
Create random num from 0 to 2
Check the random num 
Conditional
*/

function getComputerChoice () {
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 0) {
        return "rock";
    } else if (randomNum == 1) {
        return "paper";
    } else if (randomNum == 2) {
        return "scissors";
    }
}

// console.log(getComputerChoice());

function getHumanChoice () {
    let choice = prompt("Pick between the three:\nRock\nPaper\nScissors\nType your answer:");
    return choice;
}

// console.log(getHumanChoice())

function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    console.log("The player's choice: " + humanChoice);

    computerChoice = getComputerChoice()
    console.log("The computer's choice: " + computerChoice);

    let winner = "null";
    let loser = "null";

    console.log("You win! " + winner + " beats " + loser)
}

playRound()

let humanScore = 0;
let computerScore = 0;

console.log("Scores:\nComputer: " + String(computerScore) + "\nPlayer: " + String(humanScore));
