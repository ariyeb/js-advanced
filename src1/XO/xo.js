const board = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
]
// [0,1,2,3,4,5,6,7,8]

let turns = 0

export const beginNewTurn = () => {
    turns++
}

export const isCellNotEmpty = (y, x) => {
    return board[y][x] !== undefined
}

export const setCell = (y, x, isXTurn) => {
    board[y][x] = isXTurn
}

export const isVictory = (isXTurn) => {
    if (board[1][1] === isXTurn) {
        if (board[0][0] === isXTurn && board[2][2] === isXTurn) return true
        if (board[0][2] === isXTurn && board[2][0] === isXTurn) return true
    }

    for (let row of board) {
        let cellsCount = 0
        for (let cell of row) {
            if (cell !== isXTurn) break
            cellsCount++
        }
        if (cellsCount === 3) return true
    }

    for (let x = 0; x < 3; x++) {
        let cellsCount = 0
        for (let y = 0; y < 3; y++) {
            if (board[y][x] !== isXTurn) break
            cellsCount++
        }
        if (cellsCount === 3) return true
    }

    return false
}

export const isTie = () => {
    return turns === 9
}