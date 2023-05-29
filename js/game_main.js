const boardCells = document.querySelectorAll(".board_block");
const array = [];
for (let i = 0; i < 3; i++) {
  array.push([]);
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    array[i][j] = boardCells[3 * i + j];
  }
}

console.log(array);

const handleCellClick = (e) => {
  console.log(e);
  const img = document.createElement("img");
  img.setAttribute("src", "assets/icon-o.svg");
  e.target.appendChild(img);
  e.target.classList.add("clicked");
  checkGameResult();
};

const checkGameResult = () => {
  let count;

  // 가로 체크
  for (i = 0; i < 3; i++) {
    count = 0;
    for (j = 0; j < 3; j++) {
      if (array[i][j].classList.contains("clicked")) {
        count++;
      }
    }
    if (count === 3) {
      console.log("horizontal win!");
    }
  }
  // 세로 체크
  for (i = 0; i < 3; i++) {
    count = 0;
    for (j = 0; j < 3; j++) {
      if (array[j][i].classList.contains("clicked")) {
        count++;
      }
    }
    if (count === 3) {
      console.log("vertical win!");
    }
  }
  // 대각선 체크
  count = 0;
  for (i = 0; i < 3; i++) {
    if (
      array[i][i].classList.contains("clicked") ||
      array[i][2 - i].classList.contains("clicked")
    ) {
      count++;
    }
    console.log(array[i][i]);
    if (count === 3) {
      console.log("diagonal win!");
    }
  }
};

boardCells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});
