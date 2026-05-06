import { Sudoku } from "./sudoku.ts"
import { SudokuRenderer } from "./sudoku/renderer.ts"

export class App {
    rootElement: HTMLDivElement;
    sudoku: Sudoku;

    static initialize(rootElement: HTMLDivElement): App {
        let sudoku = Sudoku.testBoard()
        SudokuRenderer.render(rootElement, sudoku)
        return new App(rootElement, sudoku)
    }

    constructor(rootElement: HTMLDivElement, sudoku: Sudoku) {
        this.rootElement = rootElement
        this.sudoku = sudoku
    }
}
