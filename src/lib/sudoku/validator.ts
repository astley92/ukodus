import { Sudoku } from "../sudoku.ts"

class SudokuValidator {
    static call(cells: number[]): number[] {
        let invalidIndexes: number[] = []
        for (let colIndex = 0; colIndex < Sudoku.WIDTH; colIndex++) {
            let seen: Map<number, number[]> = new Map()
            for (let x = colIndex; x < cells.length; x += Sudoku.WIDTH) {
                let value = cells[x]
                if (value == 0) continue

                if (!seen.has(value)) {
                    seen.set(value, [x])
                } else {
                    seen.get(value)!.push(x)
                }
            }
            for (const [_, indexes] of seen) {
                if (indexes.length < 2) continue

                indexes.forEach(i => invalidIndexes.push(i))
            }
        }
        return [...invalidIndexes]
    }
}

export { SudokuValidator }
