const X_CLASS = 'x'
const CIRLCE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
	[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
 ]
const cellElements = document.querySelectorAll('[data-cell')
const board = document.getElementById('board')

let circleTurn

startGame()

function startGame() {
	circleTurn = false
	cellElements.forEach(cell => {
	cell.addEventListener('click', handleClick, {once: true})
})
	setBoardHoverClass()
}

function handleClick(e) {
	const cell = e.target
	const currentClass = circleTurn ? CIRLCE_CLASS : X_CLASS
	placeMark(cell, currentClass)
	swapTurns()
	setBoardHoverClass()
}

function placeMark(cell, currentClass) {
	cell.classList.add(currentClass)
}

function swapTurns() {
	circleTurn = !circleTurn
}

function setBoardHoverClass() {
	board.classList.remove(X_CLASS)
	board.classList.remove(CIRLCE_CLASS)
	if (circleTurn) {
		board.classList.add(CIRLCE_CLASS)
	} else {
		board.classList.add(X_CLASS)
	}
}