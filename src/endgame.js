const id01 = document.getElementById("id01");
const modalScore = document.getElementById("modal-score");

id01.addEventListener("click", function modalGone() {
    id01.style.display = "none";
});

const endGame = function(score) {
    id01.style.display = "block";
    modalScore.innerText = score;
};

export default endGame;
