import './style.css'
import { Sudoku } from "./lib/sudoku.ts"

Sudoku.initialize(document.querySelector<HTMLDivElement>('#app')!)
