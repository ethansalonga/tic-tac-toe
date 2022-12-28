const allSquares = document.querySelectorAll(".board__square")
const title  = document.querySelector(".board__title")

let currentPlayer = "X"

allSquares.forEach((square, i) => {
  square.addEventListener("click", () => {
    console.log("clicked")
    square.innerHTML = currentPlayer
    title.innerHTML = `${currentPlayer}'s Turn`
    currentPlayer = currentPlayer === "X" ? "O" : "X"
  })
})

// const boardTitle = document.querySelector(".board__title")
// const boardSquares = document.querySelectorAll(".board__square")

// let currentPlayer = "X"

// function handleTurn(square) {
//   square.disabled = true

//   if (currentPlayer === "X") {
//     square.innerHTML = "X"
//     boardTitle.innerHTML = "O's Turn"
//     currentPlayer = "O"
//   } else {
//     square.innerHTML = "O"
//     boardTitle.innerHTML = "X's Turn"
//     currentPlayer = "X"
//   }
// }

// function handleReset() {
//   boardSquares.forEach(elem => elem.disabled = false)
//   boardSquares.forEach(elem => elem.innerHTML = "")
  
//   boardTitle.innerHTML = "X's Turn"
//   currentPlayer = "X"
// }