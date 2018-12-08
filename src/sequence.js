// A random colour is chosen from the colors array.
// It is pushed to the sequence array.

import button, { buttons } from "./button.js";

const colors = ["blue", "green", "gold", "red"];
let start = null;
let count = 0;
let sequenceLength;
let sequenceArray;

function rand() {
    return Math.floor(Math.random() * 4);
}

function clickSimulator(el) {
    sequenceArray.push(el);
    let orginalColor = el;
    buttons[el].node.style.backgroundColor = "white";
    setTimeout(() => {
        buttons[el].node.style.backgroundColor = orginalColor;
    }, 300);
}

function playSequence(stateSequenceLength) {
    sequenceLength = stateSequenceLength;
    sequenceArray = [];
    sequence();
    return sequenceArray;
}

function sequence(timestamp = 0) {
    if (!start) {
        button.prototype.clickable = false;
        start = 0;
    }
    let progress = timestamp - start;

    if (progress > 600) {
        progress = 0;
        start = timestamp;
        count += 1;
        clickSimulator(colors[rand()]);
    }
    if (count >= sequenceLength) {
        start = null;
        count = 0;
        setTimeout(() => {
            button.prototype.clickable = true;
        }, 300);

        return;
    }
    requestAnimationFrame(sequence);
}

export default playSequence;
