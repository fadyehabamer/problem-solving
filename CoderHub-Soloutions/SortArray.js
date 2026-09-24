function sortArray(array, type) {
    // sort a copy so the caller's array is left unchanged
    let sorted = [...array];
    type === 'S' ? sorted.sort((a, b) => a - b) : sorted.sort((a, b) => b - a);

    return(sorted);
}
sortArray([2, 4, 9, 23, 435], 'S')