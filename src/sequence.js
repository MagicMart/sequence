const body = document.querySelector("body");
const scorePanel = document.querySelector(".score-panel");

const colors = ["blue", "green", "gold", "red"];
let start = null;
let count = 0;
let sequenceLength;
let sequenceArray;
let timerId;

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
    timerId = setInterval(sequence, 800);
    return sequenceArray;
}

function sequence() {
    if (!start) {
        body.style.backgroundColor = "rgba(120,120,120)";
        start = true;
    }
    count += 1;
    clickSimulator(colors[rand()]);

    if (count >= sequenceLength) {
        start = null;
        count = 0;
        clearInterval(timerId);
        setTimeout(() => {
            body.style.backgroundColor = "whitesmoke";
        }, 300);

        return;
    }
}

export default playSequence;
