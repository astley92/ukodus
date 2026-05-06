import { Sudoku } from "./../sudoku.ts"

export class SudokuRenderer {
    static render(element: HTMLDivElement, sudoku: Sudoku): void {
        element.innerHTML = "";

        for (let row of sudoku.board) {
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
    }
}
