import { state, loseALife, oneUp } from "./index.js";
import createButton from "./createButton";

const { button } = createButton;

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

const scorePanel = document.querySelector(".score-panel");
const startButton = document.querySelector(".start");
const buttonsDiv = document.getElementById("buttons");
const body = document.querySelector("body");

function renderBackground(node, color, time, orgColor = "rgb(255,255,255)") {
    node.style.backgroundColor = color;
    setTimeout(() => {
        node.style.backgroundColor = orgColor;
    }, time);
}

function wrongOne() {
    renderBackground(body, "red", 100);
    startButton.style.visibility = "visible";
}

function rightOne() {
    renderBackground(scorePanel, "rgb(153, 255, 102)", 100);
}

function celebrate() {
    renderBackground(body, "rgb(153, 255, 102)", 100);
}

function changeButtonColour(e) {
    if (e.target && e.target.classList.contains("button")) {
        if (button.prototype.clickable) {
            let orgColor = e.target.classList[1];
            renderBackground(e.target, "rgb(255,255,255)", 150, orgColor);

            state.userInput.push(orgColor);

            button.prototype.check(state.userInput.length - 1, state);
        }
    }
}

buttonsDiv.addEventListener("click", e => changeButtonColour(e));
