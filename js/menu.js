const btnNewGame = document.querySelectorAll(".new_game_button");
const newGamePage = document.querySelector(".new_game_page");
const toggleBtns = document.querySelectorAll(".toggle_item");
const scoreTitle = document.querySelectorAll(".score_title");

let player_1 = "player_x";

const handleToggleBtn = (e) => {
  toggleBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
};

const playerSetting = (e) => {
  if (e.target.dataset.playertype === "P2") {
    player_1 === "player_x"
      ? ((scoreTitle[0].innerText = "X (P1)"),
        (scoreTitle[2].innerText = "O (P2)"))
      : ((scoreTitle[2].innerText = "O (P1)"),
        (scoreTitle[0].innerText = "X (P2)"));
  } else {
    player_1 === "player_x"
      ? ((scoreTitle[0].innerText = "X (YOU)"),
        (scoreTitle[2].innerText = "O (CPU)"))
      : ((scoreTitle[2].innerText = "O (YOU)"),
        (scoreTitle[0].innerText = "X (CPU)"));
  }
};

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    player_1 = e.target.dataset.playername;
    handleToggleBtn(e);
  });
});

btnNewGame.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    localStorage.removeItem("playerType");
    localStorage.setItem("playerType", e.target.dataset.playertype);
    playerSetting(e);
    newGamePage.classList.add("invisible");
  });
});
