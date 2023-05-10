
let grid = []; // basically the thing we'll be printing on screen
let size = 2; // grid size

const width = 400
const height = 400

// keeping track of index values, so we dont get confused
const BLANK = 0
const UP = 1
const RIGHT = 2
const DOWN = 3
const LEFT = 4

const options = [BLANK, UP, RIGHT, DOWN, LEFT]

const tiles = [];
function preload() {
    tiles[0] = loadImage("../tiles/blank.png");
    tiles[1] = loadImage("../tiles/up.png");
    tiles[2] = loadImage("../tiles/right.png");
    tiles[3] = loadImage("../tiles/down.png")
    tiles[4] = loadImage("../tiles/left.png")
}

function setup() {
    for (let i = 0; i < size * size; i++) {
        grid[i] = {
            collapsed: false,
            options: options
        }
    }
}

const w = width / size
const h = height / size

// collapse onclick
function mousePressed() {
    redraw()
}

function draw() {
    // making a grid copy to FCKN DESTROY it /aka sort/ because we cant touch our original grid
    // sort it by option quantity, to choose a cell with lower entropy
    // (lower entropy -> less options to choose) [blank, up, left right, etc]
    // (higher entorpy -> more options to choose) [up, down] /xoski/ (isk duq xaski lsum eq)
    let gridCopy = grid.slice();
    // filter collapsed cells 
    gridCopy = gridCopy.filter((a) => !a.collapsed)
    console.table(gridCopy)
    gridCopy.sort((a, b) => {
        return a.options.length - b.options.length
    });
    const eachCellOptions = gridCopy.map((cell) => cell.options.length)
    const lowestEntropyDetected = Math.min(...eachCellOptions)
    // in case if several cells have minimum entropy, we filter them
    cellsWithLowest = gridCopy.filter((cell) => {
        return cell.options.length == lowestEntropyDetected
    })

    // now lets collapse something randomly
    const cell = random(cellsWithLowest)
    cell.collapsed = true
    const pick = random(cell.options)
    cell.options = [pick]

    createCanvas(width, height)
    for (let j = 0; j < size; j++) {
        for (let i = 0; i < size; i++) {
            let cell = grid[i + j * size];
            if (cell.collapsed) {
                let index = cell.options[0];
                image(tiles[index], i * w, j * h, w, h);
            } else {
                fill(0);
                stroke(40, 40, 40)
                rect(i * w, j * h, w, h);
            }
        }
    }

    // now collapsing nex generation of tiles.
    // we look for a collapsed tile and collapse its surroundings (whats up, down, left and right)
    // we have set rules in our rules file and by them we just remove not matching options
    let nextTiles = [];
    for (let j = 0; j < size; j++) {
        for (let i = 0; i < size; i++) {
            let index = i + j * size;
            if (grid[index].collapsed) {
                // if collapsed -> keep it the same
                nextTiles[index] = grid[index]
            } else {
                // looking whats above that cell (by j-1. its gets you one row upper /?/)
                if (j > 0) {
                    let validOptions = []
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
                    let validOptions = []
                    let right = grid[(i + 1) + j * size]
                    for (let option of right.options) {
                        let valid = rules[option][3]
                        validOptions = validOptions.concat(valid)
                    }
                    checkValid(options, validOptions)

                };

                // Look down
                if (j < size - 1) {
                    let validOptions = [];
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
                    let validOptions = []
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
    grid = nextTiles;
    noLoop()
}