import playSequence from "./sequence.js";
import endGame from "./endgame.js";

const state = {
    score: 0,
    lives: 3,
    seqLength: 3,
    sequence: [],
    userInput: []
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

function getState(name) {
    return state[name];
}

function oneUp() {
    state.score += state.seqLength;
    updateScore();
    state.seqLength += 1;
    state.sequence = [];
    state.userInput = [];
    setTimeout(() => {
        state.sequence = playSequence(state.seqLength);
    }, 500);
}

function loseALife() {
    state.seqLength = 3;
    state.lives -= 1;
    updateLives();
    state.sequence = [];
    state.userInput = [];
    if (state.lives <= 0) {
        endGame(state.score);
        state.score = 0;
        state.lives = 3;
        updateScore();
        updateLives();
    }
}

function startGame() {
    startButton.style.visibility = "hidden";
    setTimeout(() => {
        state.sequence = playSequence(state.seqLength);
    }, 500);
}

startButton.addEventListener("click", startGame);

export default {
    getState,
    oneUp,
    loseALife
};
