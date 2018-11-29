const endGame = function(score) {
    document.getElementById("id01").style.display = "block";
    document.getElementById("modal-score").innerText = score;
};

export default endGame;
