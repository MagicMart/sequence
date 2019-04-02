import playSequence from "./sequence.js";
import endGame from "./endgame.js";

const handleState = (function() {
    let game = {
        score: 0,
        lives: 3,
        sequence: [],
        seqLength: 3,
        userInput: []
    };
    return function(obj) {
        if (obj !== undefined) {
            game = Object.assign(game, obj);
        }
        return game;
    };
})();

const score = document.querySelector(".score");
const lives = document.querySelector(".lives");
const startButton = document.querySelector(".start");

function updateScore() {
    score.innerText = String(handleState().score).padStart(3, "0");
}

function updateLives() {
    lives.innerText = String(handleState().lives);
}

function getSequence() {
    const { sequence } = handleState();
    return sequence;
}

function getUserInput() {
    const { userInput } = handleState();
    return userInput;
}

/**
 * When a button is clicked,
 * its color is added to the array,
 * state.userInput
 * @param {string} color - button color
 */
function handleClick(color) {
    const { userInput } = handleState();
    handleState({ userInput: [...userInput, color] });
}

function oneUp() {
    const { score, seqLength } = handleState();

    handleState({
        score: score + seqLength,
        seqLength: seqLength + 1,
        sequence: [],
        userInput: []
    });
    updateScore();
    setTimeout(() => {
        handleState({ sequence: playSequence(seqLength + 1) });
    }, 500);
}

function loseALife() {
    const { lives, score } = handleState();

    handleState({
        seqLength: 3,
        lives: lives - 1,
        sequence: [],
        userInput: []
    });
    updateLives();
    if (lives - 1 <= 0) {
        endGame(score);
        handleState({ score: 0, lives: 3 });
        updateScore();
        updateLives();
    }
}

function startGame() {
    const { seqLength } = handleState();
    startButton.style.visibility = "hidden";
    setTimeout(() => {
        handleState({ sequence: playSequence(seqLength) });
    }, 500);
}

startButton.addEventListener("click", startGame);

export default Object.freeze({
    getSequence,
    getUserInput,
    handleClick,
    oneUp,
    loseALife
});
