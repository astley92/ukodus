export class Sudoku {
    board: Array<Array<number>>;

    static random(): Sudoku {
        let board = []
        for (let i = 0; i < 9; i++) {
            let row = []
            for (let x = 0; x < 9; x++) {
                row.push(Math.floor(Math.random() * 10))
            }

            board.push(row)
        }
        let sudoku = new Sudoku(board)
        return sudoku
    }

    constructor(board: Array<Array<number>>) {
        this.board = board
    }
}
