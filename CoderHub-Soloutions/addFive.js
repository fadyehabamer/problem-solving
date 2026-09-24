function addFive(arr) {
    // map() already builds a new array, so return it instead of writing back into arr
    return arr.map((item) => item + 5);
}
addFive(["hi", "G", "welcome"])