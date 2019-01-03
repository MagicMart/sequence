import "./main.css";
import index from "./index.js";
import createButton from "./createButton";

const { getState, loseALife, oneUp } = index;
const { button } = createButton;

button.prototype.check = function(i) {
    if (getState("userInput")[i] === getState("sequence")[i]) {
        rightOne();
        if (getState("userInput").length === getState("sequence").length) {
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
        const body = document.querySelector("body");
        if (body.style.backgroundColor === "whitesmoke") {
            let orgColor = e.target.classList[1];
            renderBackground(e.target, "rgb(255,255,255)", 150, orgColor);

            getState("userInput").push(orgColor);

            button.prototype.check(getState("userInput").length - 1);
        }
    }
}

buttonsDiv.addEventListener("click", e => changeButtonColour(e));
