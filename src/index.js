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
    gameState: "waiting"
};

const score = document.querySelector(".score");
const lives = document.querySelector(".lives");
const startButton = document.querySelector(".start");
const buttonsDiv = document.getElementById("buttons");

function updateScore() {
    score.innerText = String(state.score).padStart(3, "0");
}

function updateLives() {
    lives.innerText = String(state.lives);
}

export function oneUp() {
    state.score += state.seqLength;
    updateScore();
    state.seqLength += 1;
    state.sequence = [];
    state.userInput = [];
    playSequence();
}

export function loseALife() {
    state.seqLength = 3;
    state.lives -= 1;
    updateLives();
    state.sequence = [];
    state.userInput = [];
    state.gameState = "waiting";
    if (state.lives <= 0) {
        endGame(state.score);
        state.score = 0;
        state.lives = 3;
        updateScore();
        updateLives();
    }
}

function startGame() {
    if (state.gameState === "waiting") {
        // state.gameState = "start";
        playSequence();
    }
}

function changeButtonColour(e) {
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
}

startButton.addEventListener("click", startGame);

buttonsDiv.addEventListener("click", e => changeButtonColour(e));
