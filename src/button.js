import { state, loseALife, oneUp } from "./index.js";

const button = function(color) {
    let node = document.querySelector(`.${color}`);
    const obj = Object.create(button.prototype);
    obj.color = color;
    obj.node = node;
    return obj;
};

button.prototype.clickable = false;

button.prototype.check = function(i, state) {
    if (state.userInput[i] === state.sequence[i]) {
        rightOne();
        if (state.userInput.length === state.sequence.length) {
            button.prototype.clickable = false;
            celebrate();
            oneUp();
        } else {
            return;
        }
    } else {
        button.prototype.clickable = false;
        wrongOne();
        loseALife();
    }
};

export const buttons = {
    blue: button("blue"),
    green: button("green"),
    gold: button("gold"),
    red: button("red")
};

const scorePanel = document.querySelector(".score-panel");
const startButton = document.querySelector(".start");
const buttonsDiv = document.getElementById("buttons");

function wrongOne() {
    document.body.style.backgroundColor = "red";
    setTimeout(() => {
        document.body.style.backgroundColor = "white";
        startButton.style.visibility = "visible";
    }, 100);
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

function changeButtonColour(e) {
    if (e.target && e.target.classList.contains("button")) {
        if (button.prototype.clickable) {
            let orgColor = e.target.classList[1];
            e.target.style.backgroundColor = "white";
            setTimeout(() => {
                e.target.style.backgroundColor = orgColor;
            }, 150);
            state.userInput.push(orgColor);

            button.prototype.check(state.userInput.length - 1, state);
        }
    }
}

buttonsDiv.addEventListener("click", e => changeButtonColour(e));

export default button;
