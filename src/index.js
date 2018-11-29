import "./main.css";
import button from "./button.js";
import playSequence from "./sequence.js";
import endGame from "./endgame.js";

export const state = {
    score: 0,
    lives: 3,
    seqLength: 3,
    sequence: [],
    userInput: [],
    gameState: "stopped",
    loseALife: function loseALife() {
        this.seqLength = 3;
        this.lives -= 1;
        updateLives();
        this.sequence = [];
        this.userInput = [];
        this.gameState = "stopped";
        if (this.lives <= 0) {
            endGame(this.score);
            this.score = 0;
            this.lives = 3;
            updateScore();
            updateLives();
        }
    },
    oneUp: function oneUp() {
        this.score += this.seqLength;
        updateScore();
        this.seqLength += 1;
        this.sequence = [];
        this.userInput = [];
        playSequence();
    }
};

// export const stateMethods = {
//     loseALife: function loseALife() {
//         state.seqLength = 3;
//         state.lives -= 1;
//         updateLives();
//         state.sequence = [];
//         state.userInput = [];
//         state.gameState = "stopped";
//     },
//     oneUp: function oneUp() {
//         state.score += this.seqLength;
//         updateScore();
//         state.seqLength += 1;
//         state.sequence = [];
//         this.userInput = [];
//         playSequence();
//     }
// };

const score = document.querySelector(".score");
const lives = document.querySelector(".lives");
const startButton = document.querySelector(".start");
const buttonsDiv = document.getElementById("buttons");

export const buttons = {
    blue: button("blue"),
    green: button("green"),
    gold: button("gold"),
    red: button("red")
};

function updateScore() {
    score.innerText = String(state.score).padStart(3, "0");
}

function updateLives() {
    lives.innerText = String(state.lives);
}

function startGame() {
    if (state.gameState === "stopped") {
        state.gameState = "start";
        playSequence();
    }
}

startButton.addEventListener("click", startGame);

buttonsDiv.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("button")) {
        if (state.gameState === "user-input") {
            let orgColor = e.target.style.backgroundColor;
            e.target.style.backgroundColor = "white";
            setTimeout(() => {
                e.target.style.backgroundColor = orgColor;
            }, 150);
            state.userInput.push(orgColor);

            button.prototype.check(state.userInput.length - 1, state);
        }
    }
});
