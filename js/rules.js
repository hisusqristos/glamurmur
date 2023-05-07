const rules = {
    BLANK: [
        [BLANK, UP],
        [BLANK, RIGHT],
        [BLANK, DOWN],
        [BLANK, LEFT]
    ],
    UP: [ //up tile
        [RIGHT, DOWN, LEFT], // tiles that can connect to the up side of up tile
        [UP, DOWN, LEFT], //  tiles that can connect to the right side of up tile
        [BLANK, DOWN], //  tiles that can connect to the down side of up tile
        [UP, DOWN, RIGHT] // and left sides
    ],
    RIGHT: [
        [RIGHT, DOWN, LEFT],
        [LEFT, DOWN, UP],
        [RIGHT, LEFT, UP],
        [BLANK, LEFT]
    ],
    DOWN: [
        [BLANK, UP],
        [LEFT, DOWN, UP],
        [RIGHT, LEFT, UP],
        [UP, DOWN, RIGHT]
    ],
    LEFT: [
        [LEFT, RIGHT, DOWN],
        [BLANK, RIGHT],
        [RIGHT, UP, LEFT],
        [UP, DOWN, RIGHT]
    ]
}