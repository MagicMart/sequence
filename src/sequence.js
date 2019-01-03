const body = document.querySelector("body");
const scorePanel = document.querySelector(".score-panel");

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
    let node = document.querySelector(`.${el}`);
    setTimeout(() => {
        node.style.cssText = `background-color: white;border: 10px solid ${orginalColor}`;
        scorePanel.style.backgroundColor = orginalColor;
    }, 0);
    setTimeout(() => {
        node.style.backgroundColor = orginalColor;
        scorePanel.style.backgroundColor = "white";
        node.style.cssText = "border: 10px solid black";
    }, 300);
}

function playSequence(stateSequenceLength) {
    sequenceLength = stateSequenceLength;
    sequenceArray = [];
    requestAnimationFrame(sequence);
    return sequenceArray;
}

function sequence(timestamp) {
    if (!start) {
        // button.prototype.clickable = false;
        body.style.backgroundColor = "rgba(120,120,120)";
        start = timestamp;
    }
    let progress = timestamp - start;

    if (progress > 800) {
        progress = 0;
        start = timestamp;
        count += 1;
        clickSimulator(colors[rand()]);
    }
    if (count >= sequenceLength) {
        start = null;
        count = 0;
        setTimeout(() => {
            // button.prototype.clickable = true;
            body.style.backgroundColor = "whitesmoke";
        }, 300);

        return;
    }
    requestAnimationFrame(sequence);
}

export default playSequence;
