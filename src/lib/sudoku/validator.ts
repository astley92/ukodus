import { Sudoku } from "../sudoku.ts"

class SudokuValidator {
    static call(cells: number[]) {
        let invalidIndexes: number[] = []
        let cols = this.#extractColumns(cells)
        for (let x = 0; x < cols.length; x++) {
            let col = cols[x]

            let tally = col.reduce<Record<number, number>>((acc, curr) => {
                if (curr == 0) { return acc }

                acc[curr] = (acc[curr] || 0) + 1
                return acc
            }, {})

            let invalids = Object.entries(tally).filter(([_, v]) => v > 1).map(([k, _]) => parseInt(k, 10))
            if (invalids.length == 0) continue

            for (let y = 0; y < col.length; y++) {
                let cell = col[y]
                if (!invalids.includes(cell)) continue

                invalidIndexes.push(this.#CoordsToIndex(x, y))
            }
        }
        return invalidIndexes
    }

    static #CoordsToIndex(x: number, y: number): number {
        return (y * Sudoku.WIDTH) + x
    }

    static #extractColumns(cells: number[]): number[][] {
        let cols = []
        for (let i = 0; i < Sudoku.WIDTH; i++) {
            let col = []
            let x = i
            while (x < cells.length) {
                let val = cells[x].value
                col.push(val)
                x = x + Sudoku.WIDTH
            }
            cols.push(col)
        }
        return cols
    }
}

export { SudokuValidator }
