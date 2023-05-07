
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

let tiles = [];
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
            options: [BLANK, UP, RIGHT, DOWN, LEFT]
        }
    }
    grid[2].options = [BLANK, UP]

}

const w = width / size
const h = height / size

function draw() {
    // making a grid copy to FCKN DESTROY it /aka sort/ because we cant touch our original grid
    // sort it by options quantity, to choose a cell with lower entropy
    // (lower entropy -> less options to choose) [blank, up, left right, etc]
    // (higher entorpy -> more options to choose) [up, down] /xoski/ (isk duq xaski lsum eq)
    let gridCopy = grid.slice();
    gridCopy.sort((a, b) => {
        return a.options.length - b.options.length
    });
    const eachCellOptions = gridCopy.map((cell) => cell.options.length)
    const lowestEntropyDetected = Math.min(...eachCellOptions)
    // in case if several cells having minimum entropy,we filter them
    cellsWithLowest = gridCopy.filter((cell) => {
        return cell.options.length == lowestEntropyDetected
    })

    console.log(grid)
    console.log(cellsWithLowest)

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
    noLoop()
}