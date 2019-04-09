import "./main.css";
import index from "./index.js";

document.querySelector("body").style.visibility = "visible";

const { handleState, loseALife, scoreInc } = index;

const scorePanel = document.querySelector(".score-panel");
const buttonsDiv = document.getElementById("buttons");
const body = document.querySelector("body");

function renderBackground(node, color, time, orgColor = "rgb(255,255,255)") {
    node.style.backgroundColor = color;
    let start = null;
    requestAnimationFrame(function change(timestamp) {
        if (!start) {
            start = timestamp;
        }
        if (timestamp - start >= time) {
            node.style.backgroundColor = orgColor;
        } else {
            requestAnimationFrame(change);
        }
    });
}

function wrongOne() {
    const startButton = document.querySelector(".start");

    renderBackground(body, "red", 150);
    startButton.style.visibility = "visible";
}

function rightOne() {
    renderBackground(scorePanel, "rgb(153, 255, 102)", 150);
}

function celebrate() {
    renderBackground(body, "rgb(153, 255, 102)", 150);
}

function handleButtonClick(e) {
    if (e.target && e.target.classList.contains("button")) {
        if (handleState().sequence.length !== 0) {
            let orgColor = e.target.classList[1];
            renderBackground(e.target, "rgb(255,255,255)", 150, orgColor);
            handleState({ userInput: [...handleState().userInput, orgColor] });
            // Check
            const { userInput, sequence } = handleState();
            const i = userInput.length - 1;
            if (userInput[i] === sequence[i]) {
                rightOne();
                if (userInput.length === sequence.length) {
                    celebrate();
                    scoreInc();
                }
            } else {
                wrongOne();
                loseALife();
            }
        }
    }
}

buttonsDiv.addEventListener("click", e => handleButtonClick(e));
