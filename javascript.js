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

function playRound(humanChoice, computerChoice, round) {
    
    humanChoice = humanChoice.toLowerCase();
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
            disp_round_winner.textContent = "You win!";
            humanScore += 1;
        }
    }

    disp_player_score.textContent = player_name + ": " + humanScore;
    disp_computer_score.textContent = "Computer: " + computerScore;
}

// function winnerCheck() {

// }

let humanScore = 0;
let computerScore = 0;

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
const disp_instruction = document.querySelector(".instruction");
const container_three = document.querySelector(".container_three");
const container_three_one = document.querySelector(".container_three_one");
const container_three_two = document.querySelector(".container_three_two");

disp_player_name.textContent = "Hello, " + player_name + "!";
disp_round_number.textContent = "Round " + round_number;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click",  (e) => {
        playRound(e.target.textContent, getComputerChoice(), round_number)
        disp_round_number.textContent = "Round " + round_number;
        round_number += 1;
        if ((humanScore >= 5) || (computerScore >= 5)) {
            toRemove = [container_three_one, container_three_two];
            toRemove.forEach((elem) => {elem.remove();});
            const winnerDisplay = document.createElement("h1");
            container_three.appendChild(winnerDisplay);
            if (humanScore >= 5) {
                winnerDisplay.textContent = "You win!";
            } else if (computerScore) {
                winnerDisplay.textContent = "You lose."
                const goodLuck = document.createElement("p");
                container_three.appendChild(goodLuck);
                goodLuck.textContent = "Better luck next time~"
            }
        }
        // console.log(humanScore);
        // console.log(computerScore);        
    });
});

const htmlContainerThree = document.querySelector(".container_three");


// if ((humanScore >= 5) || (computerScore >= 5)) {
//     htmlContainerThree.remove();
//     console.log("Yes");
// }