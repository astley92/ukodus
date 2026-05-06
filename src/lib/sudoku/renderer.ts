import { Sudoku } from "./../sudoku.ts"

export class SudokuRenderer {
    static render(element: HTMLDivElement, sudoku: Sudoku): void {
        element.innerHTML = "";

        let rowElement: HTMLDivElement = document.createElement("div")
        let i = 0
        let cells = sudoku.board
        while (i < cells.length) {
            if (i % Sudoku.WIDTH === 0) {
                element.append(rowElement)
                rowElement = document.createElement("div")
                rowElement.classList.add("boardRow")
            }

            let value = cells[i]
            let cellElement = document.createElement("div")
            cellElement.classList.add("boardCell")

            if (value !== 0) {
                cellElement.textContent = value.toString();
            }

            rowElement.append(cellElement)
            i += 1
        }

        element.classList.add("board")
    }
}
