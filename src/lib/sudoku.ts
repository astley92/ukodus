export class Sudoku {
    board: Array<number>;

    static WIDTH = 9;
    static TEST_BOARD: Array = [
        0,0,3,4,0,0,1,0,0,
        0,0,0,7,0,2,0,0,0,
        2,0,4,0,0,8,7,0,9,
        0,3,5,0,0,0,0,9,7,
        0,0,0,0,0,0,0,0,0,
        1,8,0,0,0,0,5,4,0,
        5,0,1,3,0,0,9,0,4,
        0,0,0,5,0,1,0,0,0,
        0,0,2,0,0,6,8,0,0,
    ];

    static random(): Sudoku {
        let board = []
        for (let i = 0; i < this.WIDTH * this.WIDTH; i++) {
            board.push(Math.floor(Math.random() * 10))
        }
        let sudoku = new Sudoku(board)
        return sudoku
    }

    static testBoard(): Sudoku {
        return new Sudoku(this.TEST_BOARD)
    }

    constructor(board: Array<number>) {
        this.board = board
    }
}
