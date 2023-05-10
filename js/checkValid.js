const isEqual = (arr1, arr2) => arr1.every((item, index) => item === arr2[index]);

// function to test 
// (listen, im really sorry..)
// (i dont know how to write jest tests in parallel with html stuff)
const testEqual = (testable, result) => {
    // console.log(isEqual(testable, result))
    // console.log(testable)
    // console.log(result)
    return isEqual(testable, result)
}

// ELEGANTLY filter the items that exit in the second arrays
var checkValid = (arr1, arr2) => {
    return arr1.filter(item => !arr2.includes(item));
}

// TESTS TESTS TESTS ヽ(°〇°)ﾉ
const testable2 = checkValid(options, [LEFT, RIGHT, BLANK])
const result2 = [UP, DOWN]
testEqual(testable2, result2)

const testable1 = checkValid(options, [LEFT, RIGHT])
const result1 = [BLANK, UP, DOWN]
testEqual(testable1, result1)
