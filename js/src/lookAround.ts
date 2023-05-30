export { rules } from "./rules";
import { grid, Cell, Grid } from "./index";

const LookAround = (size: number, nextTiles: Grid, rules: number[][], options: number[]) => {
    for (let j = 0; j < size; j++) {
        for (let i = 0; i < size; i++) {
            let index = i + j * size;
            if (grid[index].collapsed) {
                // if collapsed -> keep it the same
                nextTiles[index] = grid[index]
            } else {
                // looking whats above that cell (by j-1. its gets you one row upper /?/)
                if (j > 0) {
                    let validOptions: number[] = []
                    let up = grid[i + (j - 1) * size]
                    for (let option of up.options) {
                        let valid = rules[option][2]
                        validOptions = validOptions.concat(valid)
                        console.log(validOptions)
                    }
                    checkValid(options, validOptions)
                }

                // looking right
                if (i < size - 1) {
                    let validOptions: number[] = []
                    let right = grid[(i + 1) + j * size]
                    for (let option of right.options) {
                        let valid = rules[option][3]
                        validOptions = validOptions.concat(valid)
                    }
                    checkValid(options, validOptions)

                };

                // Look down
                if (j < size - 1) {
                    let validOptions: number[] = []
                    let down = grid[i + (j + 1) * size]; // xi undefined :(
                    for (let option of down.options) { // aaaaaa jogeleem
                        // see, we reduce options
                        let valid = rules[option][0];
                        validOptions = validOptions.concat(valid)
                    }
                    checkValid(options, validOptions)

                };

                // left
                if (i > 0) {
                    let validOptions: number[] = []

                    let left = grid[(i - 1) + j * size]
                    for (let option of left.options) {
                        let valid = rules[option][1]
                        validOptions = validOptions.concat(valid)
                    }
                    checkValid(options, validOptions)

                }

                nextTiles[index] = {
                    options,
                    collapsed: false
                }

            }
        }
    }
}