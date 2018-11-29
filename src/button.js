import { loseALife, oneUp } from "./index.js";

const button = function(color) {
    let node = document.querySelector(`.${color}`);
    const obj = Object.create(button.prototype);
    obj.color = color;
    obj.node = node;
    return obj;
};

export const buttons = {
    blue: button("blue"),
    green: button("green"),
    gold: button("gold"),
    red: button("red")
};

const scorePanel = document.querySelector(".score-panel");

function wrongOne() {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "white";
    }, 300);
}

function rightOne() {
    scorePanel.style.backgroundColor = "rgb(153, 255, 102)";
    setTimeout(() => {
        scorePanel.style.backgroundColor = "white";
    }, 100);
}

function celebrate() {
    document.body.style.backgroundColor = "rgb(153, 255, 102)";
    setTimeout(() => {
        document.body.style.backgroundColor = "white";
    }, 100);
}

button.prototype.check = function(i, state) {
    if (state.userInput[i] === state.sequence[i]) {
        rightOne();
        if (state.userInput.length === state.sequence.length) {
            celebrate();
            oneUp();
        } else {
            return;
        }
    } else {
        wrongOne();
        loseALife();
    }
};

export default button;
