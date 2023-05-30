// ELEGANTLY filter the items that exit in the second arrays
var checkValid = (arr1: number[], arr2: number[]) => {
    return arr1.filter(item => !arr2.includes(item));
}
