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

function updateScore() {
    const scoreEl = document.querySelector(".score");
    scoreEl.innerText = String(handleState().score).padStart(3, "0");
}

function updateLives() {
    const livesEl = document.querySelector(".lives");
    livesEl.innerText = String(handleState().lives);
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
    document.querySelector(".start").style.visibility = "hidden";
    setTimeout(() => {
        handleState({ sequence: playSequence(seqLength) });
    }, 500);
}

document.querySelector(".start").addEventListener("click", startGame);

export default Object.freeze({
    handleState,
    oneUp,
    loseALife
});
