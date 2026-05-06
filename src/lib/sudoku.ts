export class Sudoku {
    board: Array<Cell>;

    static WIDTH = 9;
    static TEST_BOARD: Array<number> = [
        0,0,3,4,0,0,1,0,0,
        0,0,0,7,0,2,0,4,0,
        2,0,4,0,0,8,7,0,9,
        0,3,5,0,0,0,0,9,7,
        0,0,0,0,0,0,0,0,0,
        1,8,0,0,0,0,5,4,0,
        5,0,1,3,0,0,9,0,4,
        0,0,0,5,0,1,0,0,0,
        0,0,2,0,0,6,8,0,0,
    ];

    constructor(board: Array<Cell>) {
        this.board = board
    }

    invalidateCell(position: number) {
        let cell = this.board[position]
        cell.valid = false
    }

    static random(): Sudoku {
        let board = []
        for (let i = 0; i < this.WIDTH * this.WIDTH; i++) {
            let value = Math.floor(Math.random() * 10)
            board.push(new Cell(value))
        }
        let sudoku = new Sudoku(board)
        return sudoku
    }

    static testBoard(): Sudoku {
        let board = []
        for (let i of this.TEST_BOARD) {
            let cell = new Cell(i)

            board.push(cell)
        }
        return new Sudoku(board)
    }

}

export class Cell {
    value: number;
    valid: boolean

    constructor(value: number) {
        this.value = value
        this.valid = true
    }

    isInvalid(): boolean {
        return !this.valid
    }
}
