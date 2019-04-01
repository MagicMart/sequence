import playSequence from "./sequence.js";
import endGame from "./endgame.js";

const state = (function() {
    let game = {
        score: 0,
        lives: 3,
        sequence: [],
        seqLength: 3,
        userInput: []
    };
    function handleState(obj) {
        if (obj !== undefined) {
            game = Object.assign(game, obj);
        }
        return game;
    }
    return {
        handleState
    };
})();

const score = document.querySelector(".score");
const lives = document.querySelector(".lives");
const startButton = document.querySelector(".start");

function updateScore() {
    score.innerText = String(state.handleState().score).padStart(3, "0");
}

function updateLives() {
    lives.innerText = String(state.handleState().lives);
}

function getSequence() {
    const { sequence } = state.handleState();
    return sequence;
}

function getUserInput() {
    const { userInput } = state.handleState();
    return userInput;
}

/**
 * When a button is clicked,
 * its color is added to the array,
 * state.userInput
 * @param {string} color - button color
 */
function userInput(color) {
    const { userInput } = state.handleState();
    state.handleState({ userInput: [...userInput, color] });
}

function oneUp() {
    const { score, seqLength } = state.handleState();

    state.handleState({
        score: score + seqLength,
        seqLength: seqLength + 1,
        sequence: [],
        userInput: []
    });
    updateScore();
    setTimeout(() => {
        state.handleState({ sequence: playSequence(seqLength + 1) });
    }, 500);
}

function loseALife() {
    const { lives, score } = state.handleState();

    state.handleState({
        seqLength: 3,
        lives: lives - 1,
        sequence: [],
        userInput: []
    });
    updateLives();
    if (lives - 1 <= 0) {
        endGame(score);
        state.handleState({ score: 0, lives: 3 });
        updateScore();
        updateLives();
    }
}

function startGame() {
    const { seqLength } = state.handleState();
    startButton.style.visibility = "hidden";
    setTimeout(() => {
        state.handleState({ sequence: playSequence(seqLength) });
    }, 500);
}

startButton.addEventListener("click", startGame);

export default Object.freeze({
    getSequence,
    getUserInput,
    userInput,
    oneUp,
    loseALife
});
