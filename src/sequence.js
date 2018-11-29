// A random colour is chosen from the colors array.
// It is pushed to the sequence array.
// The button of the same name flashes on the screen.
// Thus a sequence is generated and displayed.

import { state } from "./index.js";
import { buttons } from "./button.js";

const colors = ["blue", "green", "gold", "red"];
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
    if (!start) start = timestamp;
    let progress = timestamp - start;

    if (progress > 500) {
        progress = 0;
        start = timestamp;
        count += 1;
        clickSimulator(colors[rand()]);
    }
    if (count >= state.seqLength) {
        start = null;
        count = 0;
        state.gameState = "user-input";
        return;
    }
    requestAnimationFrame(playSequence);
}

export default playSequence;
