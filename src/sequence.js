// A random colour is chosen from the colors array.
// It is pushed to the sequence array.

import { state } from "./index.js";
import { buttons } from "./button.js";

const colors = ["blue", "green", "gold", "red"];
const startButton = document.querySelector(".start");
let start = null;
let count = 0;

function rand() {
    return Math.floor(Math.random() * 4);
}

function clickSimulator(el) {
    state.sequence.push(el);
    let orginalColor = el;
    buttons[el].node.style.backgroundColor = "white";
    setTimeout(() => {
        buttons[el].node.style.backgroundColor = orginalColor;
    }, 300);
}

function playSequence(timestamp) {
    if (!start) {
        state.gameState = "no-input";
        startButton.style.visibility = "hidden";
        start = timestamp;
    }
    let progress = timestamp - start;

    if (progress > 600) {
        progress = 0;
        start = timestamp;
        count += 1;
        clickSimulator(colors[rand()]);
    }
    if (count >= state.seqLength) {
        start = null;
        count = 0;
        setTimeout(() => {
            state.gameState = "user-input";
        }, 300);

        return;
    }
    requestAnimationFrame(playSequence);
}

export default playSequence;
