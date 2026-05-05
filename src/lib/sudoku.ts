export class Sudoku {
    rootElement: HTMLDivElement;
    board: Array<Array<number>>;

    static initialize(element: HTMLDivElement): Sudoku {
        let board = []
        for (let i = 0; i < 9; i++) {
            let row = []
            for (let x = 0; x < 9; x++) {
                row.push(Math.floor(Math.random() * 10))
            }

            board.push(row)
        }
        let sudoku = new Sudoku(element, board)

        for (let row of board) {
            let rowElement = document.createElement("div")
            rowElement.classList.add("boardRow")
            for (let value of row) {
                let cellElement = document.createElement("div")
                cellElement.classList.add("boardCell")
                if (value !== 0) {
                    cellElement.textContent = value.toString();
                }
                rowElement.append(cellElement)
            }
            element.append(rowElement)
        }

        element.classList.add("board")
        return sudoku
    }

    constructor(element: HTMLDivElement, board: Array<Array<number>>) {
        this.rootElement = element
        this.board = board
    }
}
