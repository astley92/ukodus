export class Sudoku {
    board: Array<number>;

    static WIDTH = 9;

    static random(): Sudoku {
        let board = []
        for (let i = 0; i < this.WIDTH * this.WIDTH; i++) {
            board.push(Math.floor(Math.random() * 10))
        }
        let sudoku = new Sudoku(board)
        return sudoku
    }

    constructor(board: Array<number>) {
        this.board = board
    }
}
