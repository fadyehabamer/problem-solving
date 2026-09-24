function sortIt(arr) {
    return [...arr].sort((a, b) => Number(a) - Number(b));
}
console.log(sortIt([1, [3],
    [0], 2, [4]
]))
