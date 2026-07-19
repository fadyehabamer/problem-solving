function sortArray(array, type) {
    type === 'S' ? array.sort((a, b) => a - b) : array.sort((a, b) => b - a);

    return(array);
}
sortArray([2, 4, 9, 23, 435], 'S')