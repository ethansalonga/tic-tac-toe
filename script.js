const boardTitle = document.querySelector(".board__title")

let currentPlayer = "X"

function handleTurn(square) {
  if (currentPlayer === "X") {
    square.innerHTML = "X"
    boardTitle.innerHTML = "O's Turn"
    currentPlayer = "O"
  } else {
    square.innerHTML = "O"
    boardTitle.innerHTML = "X's Turn"
    currentPlayer = "X"
  }
}