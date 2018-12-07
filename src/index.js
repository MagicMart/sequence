import "./main.css";
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
    setTimeout(() => {
        playSequence();
    }, 1000);
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
        playSequence();
    }
}

startButton.addEventListener("click", startGame);
