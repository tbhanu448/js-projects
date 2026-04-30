let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreEl = document.querySelector("#user-score");
const compScoreEl = document.querySelector("#comp-score");

const ComputerClick = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
};

const drawGame = () => {
    msg.innerText = "Game was draw! Play Again.";
    msg.style.backgroundColor = "black";
    msg.style.color = "white";
};

const showWinner = (userWin, userClick, CompClick) => {
    if (userWin) {
        userScore++;
        userScoreEl.innerText = userScore;

        msg.innerText = `You win! ${userClick} beats ${CompClick}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScoreEl.innerText = compScore;

        msg.innerText = `You lose! ${CompClick} beats ${userClick}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userClick) => {
    const CompClick = ComputerClick();

    if (userClick === CompClick) {
        drawGame();
    } else {
        let userWin = true;

        if (userClick === "rock") {
            userWin = CompClick !== "paper";
        } else if (userClick === "paper") {
            userWin = CompClick !== "scissor";
        } else {
            userWin = CompClick !== "rock";
        }

        showWinner(userWin, userClick, CompClick);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userClick = choice.getAttribute("id");
        playGame(userClick);
    });
});