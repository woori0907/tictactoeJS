const btnNewGame = document.querySelectorAll(".new_game_button");
const newGamePage = document.querySelector(".new_game_page");
const toggleBtns = document.querySelectorAll(".toggle_item");

const handleToggleBtn = (e) => {
  toggleBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
};

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    localStorage.removeItem("player");
    localStorage.setItem("player", e.target.dataset.playername);
    handleToggleBtn(e);
  });
});

btnNewGame.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    localStorage.removeItem("playerType");
    localStorage.setItem("playerType", e.target.dataset.playertype);
    newGamePage.classList.add("invisible");
  });
});
