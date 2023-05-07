let tiles = [];

function preload() {
    tiles[0] = loadImage("../tiles/left.png");
    // tiles[1] = loadImage("tiles/up.png");
    // tiles[2] = loadImage("tiles/right.png");
    // tiles[3] = loadImage("tiles/down.png")
    // tiles[4] = loadImage("tiles/left.png")
}

function setup() {
    createCanvas(400, 400)
    image(tiles[0], 0, 0)
    // image(tiles[1], 50, 0)
    // image(tiles[2], 100, 0)
    // image(tiles[3], 150, 0)
    // image(tiles[4], 50, 50)
}

function draw() {
    background('#0E8388')
}
