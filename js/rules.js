const rules = {
    BLANK: [
        [BLANK, UP],
        [BLANK, RIGHT],
        [BLANK, DOWN],
        [BLANK, LEFT]
    ],
    UP: [
        [RIGHT, DOWN, LEFT],
        [UP, DOWN, LEFT],
        [BLANK, DOWN],
        [UP, DOWN, RIGHT]
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