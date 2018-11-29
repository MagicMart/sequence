// A random colour is chosen from the colors array.
// It is pushed to the sequence array.
// The button of the same name flashes on the screen.
// Thus a sequence is generated and displayed.

import { state, buttons } from "./index.js";

const colors = ["blue", "green", "gold", "red"];

function rand() {
    return Math.floor(Math.random() * 4);
}

function clicker(el) {
    state.sequence.push(el);
    let orginalColor = el;
    buttons[el].node.style.backgroundColor = "white";
    setTimeout(() => {
        buttons[el].node.style.backgroundColor = orginalColor;
    }, 300);
}

function myTimeout(j, time) {
    setTimeout(() => {
        clicker(colors[j]);
        if (state.sequence.length === state.seqLength) {
            state.gameState = "user-input";
        }
    }, time);
}

function playSequence() {
    let time = 1000;
    for (let i = 0; i < state.seqLength; i += 1) {
        let j = rand();
        myTimeout(j, time);
        time += 500;
    }
}

export default playSequence;
