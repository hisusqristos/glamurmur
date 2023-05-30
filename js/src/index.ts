import P5 from 'p5';
import { BLANK, UP, RIGHT, DOWN, LEFT } from './rules';
// load tile images
import upTile from "../../tiles/up.png"
import downTile from "../../tiles/down.png"
import leftTile from "../../tiles/left.png"
import rightTile from "../../tiles/right.png"
import blankTile from "../../tiles/blank.png"

type Cell = { collapsed: boolean, options: number[] };
type Grid = Cell[]

let grid: Grid = []; // basically the thing we'll be printing on screen
let size = 2; // grid size

const width = 400
const height = 400

const options = [BLANK, UP, RIGHT, DOWN, LEFT]
const tiles: any = [];

var sketch = (p: P5) => {
    function preload() {
        tiles[0] = blankTile
        tiles[1] = upTile
        tiles[2] = rightTile
        tiles[3] = downTile
        tiles[4] = leftTile
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
    p.mousePressed = () => {
        p.redraw()
    }

    p.draw = () => {
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
        const cellsWithLowest = gridCopy.filter((cell) => {
            return cell.options.length == lowestEntropyDetected
        })

        // now lets collapse something randomly
        const cell = p.random(cellsWithLowest)
        cell.collapsed = true
        const pick = p.random(cell.options)
        cell.options = [pick]

        p.createCanvas(width, height)
        for (let j = 0; j < size; j++) {
            for (let i = 0; i < size; i++) {
                let cell = grid[i + j * size];
                if (cell.collapsed) {
                    let index = cell.options[0];
                    p.image(tiles[index], i * w, j * h, w, h);
                } else {
                    p.fill(0);
                    p.stroke(40, 40, 40)
                    p.rect(i * w, j * h, w, h);
                }
            }
        }

        // now collapsing nex generation of tiles.
        // we look for a collapsed tile and collapse its surroundings (whats up, down, left and right)
        // we have set rules in our rules file and by them we just remove not matching options
        let nextTiles: Grid = [];

        grid = nextTiles;
        p.noLoop()
    }
}
new P5(sketch);

export { grid, Cell, Grid }