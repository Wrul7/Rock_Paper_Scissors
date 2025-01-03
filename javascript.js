/* Mema Pseudocode 
Create function getComputerChoice
Create random num from 0 to 2
Check the random num 
Conditional
*/

function getComputerChoice() {
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

function getHumanChoice() {
    let choice = prompt("Pick between the three:\nRock\nPaper\nScissors\nType your answer:");
    return choice;
}

// console.log(getHumanChoice())

function playRound(humanChoice, computerChoice, round) {
    // console.log(String(round))

    // humanChoice = humanChoice.toLowerCase();
    // console.log("The player's choice: " + humanChoice);

    computerChoice = computerChoice.toLowerCase();
    disp_computer_choice.textContent = "Computer picks " + getComputerChoice();

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            disp_round_winner.textContent = "It's a tie!";
        } else if (computerChoice == "paper") {
            disp_round_winner.textContent = "You lose.";
            computerScore += 1;
        } else if (computerChoice == "scissors") {
            disp_round_winner.textContent = "You win!";
            humanScore += 1;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "paper") {
            disp_round_winner.textContent = "It's a tie!";
        } else if (computerChoice == "scissors") {
            disp_round_winner.textContent = "You lose.";
            computerScore += 1;
        } else if (computerChoice == "rock") {
            disp_round_winner.textContent = "You win!";
            humanScore += 1;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "scissors") {
            disp_round_winner.textContent = "It's a tie!";
        } else if (computerChoice == "rock") {
            disp_round_winner.textContent = "You lose.";
            computerScore += 1;
        } else if (computerChoice == "paper") {
            console.log("Computer chose paper. You win!");
            humanScore += 1;
        }
    // } else {
    //     console.log("Invalid input.")

    disp_player_score.textContent = player_name + ": " + humanScore;
    disp_computer_score.textContent = "Computer: " + computerScore;
    }
}

let humanScore = 0;
let computerScore = 0;

// playRound(getHumanChoice(), getComputerChoice(), "Round 1")
// playRound(getHumanChoice(), getComputerChoice(), "Round 2")
// playRound(getHumanChoice(), getComputerChoice(), "Round 3")
// playRound(getHumanChoice(), getComputerChoice(), "Round 4")
// playRound(getHumanChoice(), getComputerChoice(), "Round 5")

// Results

console.log("Scores:\nComputer: " + String(computerScore) + "\nPlayer: " + String(humanScore));
if (humanScore > computerScore) {
    console.log("Congratulations, you win!")
} else if (humanScore < computerScore) {
    console.log("You lose. Computer wins.")
} else if (humanScore == computerScore) {
    console.log("It's a tie!")
}

const player_name = "Sample";
let round_number = 0
let round_winner = "Sample";

//DOM Manipulation
const disp_player_name = document.querySelector(".player_name");
const disp_player_score = document.querySelector(".player_score");
const disp_computer_score = document.querySelector(".computer_score");
const disp_round_number = document.querySelector(".round_number");
const disp_computer_choice = document.querySelector(".computer_choice");
const disp_round_winner = document.querySelector(".round_winner");

disp_player_name.textContent = "Hello, " + player_name + "!";





// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//     button.addEventListener("click",  (e) => {
//         playRound(e.target.textContent, getComputerChoice(), round_number)
//         disp_round_number.textContent = "Round " + round_number;
//         round_number += 1;
//     })
// });