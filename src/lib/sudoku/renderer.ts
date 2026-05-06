import { Sudoku, Cell } from "./../sudoku.ts"

export class SudokuRenderer {
    static render(element: HTMLDivElement, sudoku: Sudoku): void {
        element.innerHTML = "";

        let rowElement: HTMLDivElement = document.createElement("div")
        rowElement.classList.add("boardRow")

        let i = 0
        let cells = sudoku.board
        while (i < cells.length) {
            if (i % Sudoku.WIDTH === 0 && rowElement.hasChildNodes()) {
                element.append(rowElement)
                rowElement = document.createElement("div")
                rowElement.classList.add("boardRow")
            }

            let cellElement = this.#createCellElement(cells[i])

            rowElement.append(cellElement)
            i += 1
        }
        element.append(rowElement)

        element.classList.add("board")
    }

    static #createCellElement(cell: Cell): HTMLDivElement {
        let element = document.createElement("div")
        element.classList.add("boardCell")

        if (cell.value !== 0) {
            element.textContent = cell.value.toString();
        }

        if (cell.isInvalid()) {
            element.classList.add("invalid")
        }

        return element
    }
}
