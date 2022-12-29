const allSquares = document.querySelectorAll(".board__square")
const title = document.querySelector(".board__title")

let currentPlayer = "X"
let gameOver = false
let board = new Array(9)

allSquares.forEach((square, i) => {
  square.addEventListener("click", () => {
    if (gameOver) {
      return
    }
    square.innerHTML = currentPlayer
    board[i] = currentPlayer

    if (checkWin()) {
      title.innerHTML = `${currentPlayer} wins!`
      gameOver = true
      return
    }

    title.innerHTML = `${currentPlayer}'s Turn`
    currentPlayer = currentPlayer === "X" ? "O" : "X"
  })
})

function checkWin() {
  const winningIndices = [
    // Horizontal Wins
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical Wins
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal Wins
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < winningIndices.length; ++i) {
    const matchingIndices = winningIndices[i]
    let symbol1 = board[matchingIndices[0]]
    let symbol2 = board[matchingIndices[1]]
    let symbol3 = board[matchingIndices[2]]

    if (!symbol1 || !symbol2 || !symbol3) {
      continue
    }

    if (symbol1 === symbol2 && symbol2 === symbol3) {
      console.log("winner at", matchingIndices);
      return true
    }
  }
}