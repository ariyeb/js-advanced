import {
    beginNewTurn,
    isCellNotEmpty,
    isTie,
    isVictory,
    setCell
} from './xo.js'

const board = document.getElementById('board')

let cells = []
let isXTurn = true

for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div')
    cell.className = "cell"
    board.appendChild(cell)
    cells.push(cell)
}

const getCircleElement = () => {
    const circle = document.createElement('div')
    circle.className = "circle"
    return circle
}

const getXElement = () => {
    const container = document.createElement('div')
    const part1 = document.createElement('div')
    const part2 = document.createElement('div')
    container.className = 'x'
    part1.className = 'x__part1'
    part2.className = 'x__part2'
    container.appendChild(part1)
    container.appendChild(part2)
    return container
}

for (let i = 0; i < 9; i++) {
    cells[i].addEventListener('click', () => {
        const y = Math.floor(i / 3)
        const x = i % 3
        if (isCellNotEmpty(y, x)) return

        beginNewTurn()

        cells[i].appendChild(
            isXTurn ? getXElement() : getCircleElement()
        )

        setCell(y, x, isXTurn)

        if (isVictory(isXTurn)) {
            alert((isXTurn ? 'X' : 'Circle') + " won")
        } else if (isTie()) {
            alert('Tie!!')
        }

        isXTurn = !isXTurn
    })
}