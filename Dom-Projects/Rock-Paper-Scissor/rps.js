const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
	const randomIndex = Math.floor(Math.random() * options.length);
	return options[randomIndex];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
	return (
		(playerChoice === "Rock" && computerChoice === "Scissors") ||
		(playerChoice === "Scissors" && computerChoice === "Paper") ||
		(playerChoice === "Paper" && computerChoice === "Rock")
	);
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
	const computerResult = getRandomComputerResult();

	if (hasPlayerWonTheRound(userOption, computerResult)) {
		playerScore++;
		return `Player wins! ${userOption} beats ${computerResult}`;
	} else if (computerResult === userOption) {
		return `It's a tie! Both chose ${userOption}`;
	} else {
		computerScore++;
		return `Computer wins! ${computerResult} beats ${userOption}`;
	}
}

const playerScoreSpanElement = document.querySelector("#player-score");
const computerScoreSpanElement = document.querySelector("#computer-score");
const roundResultsMsg = document.querySelector("#results-msg");
const winnerMsgElement = document.querySelector("#winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.querySelector("#reset-game-btn");

function showResults(userOption) {
	roundResultsMsg.textContent = getRoundResults(userOption);
	playerScoreSpanElement.textContent = playerScore;
	computerScoreSpanElement.textContent = computerScore;

	if (playerScore === 3 || computerScore === 3) {
		winnerMsgElement.textContent = `${playerScore === 3 ? "PLayer has won the game!" : "Computer has won the game!"}`;

		resetGameBtn.style.display = "block";
		optionsContainer.style.display = "none";
	}
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerHTML = playerScore;
    computerScoreSpanElement.innerHTML = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block"
    winnerMsgElement.textContent = " ";
    roundResultsMsg.textContent = " ";
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");


rockBtn.addEventListener("click", () => {
	showResults("Rock");
});

paperBtn.addEventListener("click", () => {
	showResults("Paper");
});

scissorsBtn.addEventListener("click", () => {
	showResults("Scissors");
});
