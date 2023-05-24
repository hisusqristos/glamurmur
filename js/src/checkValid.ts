// ELEGANTLY filter the items that exit in the second arrays
var checkValid = (arr1: [], arr2: []) => {
    return arr1.filter(item => !arr2.includes(item));
}
