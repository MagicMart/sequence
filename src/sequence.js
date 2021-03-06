function playSequence(num, cb) {
    function randomColor() {
        const col = ["red", "green", "blue", "gold"];
        return col[Math.floor(Math.random() * 4)];
    }

    function makeArr(size) {
        return new Array(size).fill();
    }
    const makeArrRandomColor = size => makeArr(size).map(() => randomColor());

    function spit(arr) {
        const body = document.querySelector("body");
        body.style.backgroundColor = "rgba(120,120,120)";
        const scorePanel = document.querySelector(".score-panel");

        let start = null;
        let progress;
        let i = 0;
        let node;

        requestAnimationFrame(function change(timestamp) {
            node = document.querySelector(`.${arr[i]}`);
            if (!start) {
                start = timestamp;
            }
            progress = timestamp - start;
            if (progress > 500) {
                scorePanel.style.backgroundColor = arr[i];
                node.style.cssText = `background-color: white;border: 10px solid ${
                    arr[i]
                }`;
                node.style.boxShadow = "0 5px #666";
                node.style.transform = "translateY(4px)";
            }
            if (progress > 800) {
                node.style.backgroundColor = arr[i];
                scorePanel.style.backgroundColor = "white";
                node.style.cssText = "border: 10px solid black";
                i += 1;
                progress = 0;
                start = timestamp;
            }

            if (i < arr.length) {
                requestAnimationFrame(change);
            } else {
                setTimeout(() => {
                    body.style.backgroundColor = "whitesmoke";
                    cb(arr);
                }, 300);
            }
        });
    }

    spit(makeArrRandomColor(num));
}

export default playSequence;
