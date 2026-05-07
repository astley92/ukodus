import { describe, expect, test } from "vitest"
import { SudokuValidator } from "./../../src/lib/sudoku/validator"

describe(".call", () => {
    test("returns empty array for boards with no errors", () => {
        let grid: number[] = [
            9,0,3,4,0,0,1,0,0,
            0,0,0,7,0,2,0,4,0,
            2,0,4,0,0,8,7,0,9,
            0,3,5,0,0,0,0,9,7,
            0,0,0,0,0,0,0,0,0,
            1,8,0,0,0,0,5,3,0,
            5,0,1,3,0,0,9,0,4,
            0,0,0,5,0,1,0,0,0,
            0,0,2,0,0,6,8,0,0,
        ];

        expect(SudokuValidator.call(grid)).toEqual([])
    })

    test("detects column-wise violations", () => {
        let grid: number[] = [
            9,0,3,4,0,0,1,0,0,
            9,0,0,7,0,2,0,4,0,
            2,0,4,0,0,8,7,0,9,
            0,3,5,0,0,0,0,9,7,
            0,0,0,0,0,0,0,0,0,
            1,8,0,0,0,1,5,3,0,
            5,0,1,3,0,1,9,0,4,
            0,0,0,5,0,1,0,0,0,
            0,0,2,0,0,6,8,0,0,
        ];

        let results: number[] = SudokuValidator.call(grid)
        expect(results).toHaveLength(5)
        expect(results).toEqual(expect.arrayContaining([0, 9, 50, 59, 68]))
    })
})
