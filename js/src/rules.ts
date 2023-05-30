// keeping track of index values, so we dont get confused
const BLANK = 0
const UP = 1
const RIGHT = 2
const DOWN = 3
const LEFT = 4

const rules = [
    [
        [BLANK, UP],
        [BLANK, RIGHT],
        [BLANK, DOWN],
        [BLANK, LEFT]
    ],
    [ //up tile
        [RIGHT, DOWN, LEFT], // tiles that can connect to the up side of up tile
        [UP, DOWN, LEFT], //  tiles that can connect to the right side of up tile
        [BLANK, DOWN], //  tiles that can connect to the down side of up tile
        [UP, DOWN, RIGHT] // and left sides
    ],
    [
        [RIGHT, DOWN, LEFT],
        [LEFT, DOWN, UP],
        [RIGHT, LEFT, UP],
        [BLANK, LEFT]
    ],
    [
        [BLANK, UP],
        [LEFT, DOWN, UP],
        [RIGHT, LEFT, UP],
        [UP, DOWN, RIGHT]
    ],
    [
        [LEFT, RIGHT, DOWN],
        [BLANK, RIGHT],
        [RIGHT, UP, LEFT],
        [UP, DOWN, RIGHT]
    ]
]

export {
    rules
    , BLANK
    , UP
    , RIGHT
    , DOWN
    , LEFT
}