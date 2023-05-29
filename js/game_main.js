const boardCells = document.querySelectorAll(".board_block");

const handleCellClick = (e) => {
  console.log(e);
  const img = document.createElement("img");
  console.log(img);
  img.setAttribute("src", "assets/icon-o.svg");
  e.target.appendChild(img);
};

boardCells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});
