const btnNewGame = document.querySelectorAll(".new_game_button");
const newGamePage = document.querySelector(".new_game_page");

btnNewGame.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    localStorage.removeItem("playerType");
    localStorage.setItem("playerType", e.target.dataset.playertype);
    newGamePage.classList.add("invisible");
  });
});
