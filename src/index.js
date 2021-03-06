import playSequence from "./sequence";
import endGame from "./endgame.js";

const handleState = (function() {
    let game = {
        score: 0,
        lives: 3,
        sequence: [],
        seqLength: 3,
        userInput: []
    };
    return function(obj = {}) {
        game = Object.assign(game, obj);
        return game;
    };
})();

function scoreDisplay(num) {
    const scoreEl = document.querySelector(".score");
    scoreEl.innerText = String(num).padStart(3, "0");
}

function livesDisplay(num) {
    const livesEl = document.querySelector(".lives");
    livesEl.innerText = String(num);
}

function scoreInc() {
    const { score, seqLength } = handleState();

    handleState({
        score: score + seqLength,
        seqLength: seqLength + 1,
        sequence: [],
        userInput: []
    });
    scoreDisplay(score + seqLength);
    setTimeout(() => {
        playSequence(seqLength + 1, arr => handleState({ sequence: arr }));
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
    if (lives - 1 <= 0) {
        endGame(score);
        handleState({ score: 0, lives: 3 });
        scoreDisplay(0);
        livesDisplay(3);
    } else {
        livesDisplay(lives - 1);
    }
}

function startGame() {
    const { seqLength } = handleState();
    document.querySelector(".start").style.visibility = "hidden";
    setTimeout(() => {
        playSequence(seqLength, arr => handleState({ sequence: arr }));
        document
            .querySelector(".start")
            .addEventListener("click", startGame, { once: true });
    }, 500);
}

document
    .querySelector(".start")
    .addEventListener("click", startGame, { once: true });

export default Object.freeze({
    handleState,
    scoreInc,
    loseALife
});
