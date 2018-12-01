const id01 = document.getElementById("id01");
const modalScore = document.getElementById("modal-score");
const modalX = document.getElementById("id01");

modalX.addEventListener("click", function modalGone() {
    modalX.style.display = "none";
});

const endGame = function(score) {
    id01.style.display = "block";
    modalScore.innerText = score;
};

export default endGame;
