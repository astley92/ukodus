import { Sudoku } from "./sudoku.ts"
import { SudokuRenderer } from "./sudoku/renderer.ts"
import { SudokuValidator } from "./sudoku/validator.ts"

class App {
    rootElement: HTMLDivElement;
    sudoku: Sudoku;

    static initialize(rootElement: HTMLDivElement): App {
        let sudoku = Sudoku.testBoard()
        let invalidIndexes: number[] = SudokuValidator.call(sudoku.board.map((cell) => cell.value))

        for (let i of invalidIndexes) {
            sudoku.invalidateCell(i)
        }

        SudokuRenderer.render(rootElement, sudoku)
        return new App(rootElement, sudoku)
    }

    constructor(rootElement: HTMLDivElement, sudoku: Sudoku) {
        this.rootElement = rootElement
        this.sudoku = sudoku
    }
}

export { App }
