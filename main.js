const compChoiceDisplay = document.getElementById("comp-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let compChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateCompChoice();
    getResult();
  })
);

function generateCompChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);

  if (randomNumber === 1) {
    compChoice = "rock";
  }
  if (randomNumber === 2) {
    compChoice = "scissors";
  }
  if (randomNumber === 3) {
    compChoice = "paper";
  }

  compChoiceDisplay.innerHTML = compChoice;
}

function getResult() {
  if (compChoice === userChoice) {
    result = "it's a tie";
  }
  if (compChoice === "rock" && userChoice === "scissors") {
    result = "Computer wins";
  }
  if (compChoice === "rock" && userChoice === "paper") {
    result = "User wins";
  }
  if (compChoice === "paper" && userChoice === "rock") {
    result = "Computer wins";
  }
  if (compChoice === "paper" && userChoice === "scissors") {
    result = "User wins";
  }
  if (compChoice === "scissors" && userChoice === "paper") {
    result = "Computer wins";
  }
  if (compChoice === "scissors" && userChoice === "rock") {
    result = "User wins";
  }

  resultDisplay.innerHTML = result;
}
