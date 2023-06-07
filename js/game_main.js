const boardCells = document.querySelectorAll(".board_block");
const currentTurn = document.querySelectorAll(".player_turn");
const img = document.createElement("img");
const array = [];

let isGameOver = false;
let isPlayerWin = false;
let currentPlayer = "x";

// 초기화 : 게임 결과 체크를 위해 불러운 칸들을 3*3 배열에 넣어줌.
for (let i = 0; i < 3; i++) {
  array.push([]);
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    array[i][j] = boardCells[3 * i + j];
  }
}

const displayCurrentPlayer = () => {
  if (currentPlayer === "o") {
    currentTurn[1].classList.remove("invisible");
    currentTurn[0].classList.add("invisible");
  } else {
    currentTurn[0].classList.remove("invisible");
    currentTurn[1].classList.add("invisible");
  }
};

const handleCellClick = (e) => {
  console.log(e);
  const img = document.createElement("img");
  if (currentPlayer === "o") {
    img.setAttribute("src", "assets/icon-o.svg");
  } else {
    img.setAttribute("src", "assets/icon-x.svg");
  }
  e.target.appendChild(img);
  e.target.classList.add("clicked", currentPlayer);
  checkGameResult();
  if (currentPlayer === "o") {
    currentPlayer = "x";
  } else {
    currentPlayer = "o";
  }
  displayCurrentPlayer();
};

const checkGameResult = () => {
  let x_count, o_count;

  // 가로 체크
  for (i = 0; i < 3; i++) {
    x_count = 0;
    o_count = 0;
    for (j = 0; j < 3; j++) {
      if (array[i][j].classList.contains("clicked")) {
        if (array[i][j].classList.contains("x")) {
          x_count++;
        } else if (array[i][j].classList.contains("o")) {
          o_count++;
        }
      }
      console.log(x_count, o_count);
    }
    if (x_count === 3) {
      console.log("player X win!");
    } else if (o_count === 3) {
      console.log("player O win!");
    }
  }
  // 세로 체크
  for (i = 0; i < 3; i++) {
    x_count = 0;
    o_count = 0;
    for (j = 0; j < 3; j++) {
      if (array[j][i].classList.contains("clicked")) {
        if (array[j][i].classList.contains("x")) {
          x_count++;
        } else if (array[j][i].classList.contains("o")) {
          o_count++;
        }
      }
    }
    if (x_count === 3) {
      console.log("player X win!");
    } else if (o_count === 3) {
      console.log("player O win!");
    }
  }
  // 대각선 체크
  x_count = 0;
  o_count = 0; //for문 돌 때마다 count가 초기화되면 안 되기 때문에 for문 밖에서 0으로 초기화
  for (i = 0; i < 3; i++) {
    if (
      array[i][i].classList.contains("clicked") ||
      array[i][2 - i].classList.contains("clicked")
    ) {
      if (array[i][2 - i].classList.contains("x")) {
        x_count++;
      } else if (array[i][2 - i].classList.contains("o")) {
        o_count++;
      }
    }
    if (x_count === 3) {
      console.log("player X win!");
    } else if (o_count === 3) {
      console.log("player O win!");
    }
  }
};

boardCells.forEach((cell) => {
  cell.addEventListener("click", handleCellClick);
});
