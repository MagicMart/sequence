import "./main.css";
import index from "./index.js";

const { handleState, loseALife, oneUp } = index;

const scorePanel = document.querySelector(".score-panel");
const buttonsDiv = document.getElementById("buttons");
const body = document.querySelector("body");

function renderBackground(node, color, time, orgColor = "rgb(255,255,255)") {
    setTimeout(() => {
        node.style.backgroundColor = color;
        setTimeout(() => {
            node.style.backgroundColor = orgColor;
        }, time);
    }, 0);
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
        const body = document.querySelector("body");
        if (body.style.backgroundColor === "whitesmoke") {
            let orgColor = e.target.classList[1];
            renderBackground(e.target, "rgb(255,255,255)", 150, orgColor);
            handleState({ userInput: [...handleState().userInput, orgColor] });
            // Check
            const { userInput, sequence } = handleState();
            const index = userInput.length - 1;
            if (userInput[index] === sequence[index]) {
                rightOne();
                if (userInput.length === sequence.length) {
                    celebrate();
                    oneUp();
                }
            } else {
                wrongOne();
                loseALife();
            }
        }
    }
}

buttonsDiv.addEventListener("click", e => handleButtonClick(e));
